/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-undef */
import { exec } from "child_process";
// import * as fs from "fs";
import { glob } from "glob";
import { builtinModules } from "node:module";
import { fileURLToPath, URL } from "node:url";
import path from "path";
import resolve from "@rollup/plugin-node-resolve";
import typescript from "@rollup/plugin-typescript";

const otherDepsToCheck = [];

function run(cmd) {
  return new Promise((resolve, reject) => {
    exec(cmd, (error, stdout, stderr) => {
      if (error) return reject(error);
      if (stderr) return reject(stderr);
      resolve(stdout);
    });
  });
}

function runOnSuccessPlugin() {
  return {
    name: "run-on-success",
    async writeBundle() {
      // await run("tsx ../../scripts/ensure-use-client.ts src dist");
      await run("cp ../../README.md ./dist/README.md");
      await run(
        "cp ../../scripts/nativewind-env.d.ts ./dist/nativewind-env.d.ts",
      );
      await run(
        "tsx ../../scripts/package-json-generator.ts ./src ./package.json ./dist/package.json --no-exports-edit",
      );
    },
  };
}

/** @type {import('rollup').RollupOptions} */
const options = [
  {
    input: Object.fromEntries(
      glob
        .sync("src/**/*.{ts,tsx}")
        .map((file) => [
          path.relative(
            "src",
            file.slice(0, file.length - path.extname(file).length),
          ),
          fileURLToPath(new URL(file, import.meta.url)),
        ]),
    ),
    jsx: "preserve",
    onwarn(warning, warn) {
      if (warning.code === "MODULE_LEVEL_DIRECTIVE") {
        return;
      }
      warn(warning);
    },
    treeshake: true,
    logLevel: "debug",
    output: [
      {
        format: "es",
        dir: "dist",
        entryFileNames: "[name].js",
        chunkFileNames: "chunks/[name]-[hash].js",
        banner: `"use client";`,
        exports: "auto",
      },
      {
        dir: "dist",
        format: "cjs",
        entryFileNames: "[name].cjs",
        chunkFileNames: "chunks/[name]-[hash].cjs",
        exports: "auto",
        banner: `"use client";`,
      },
    ],
    plugins: [resolve(), typescript(), runOnSuccessPlugin()],
    // external: getExternalDependencies(),
    external: (source, _importer, _isResolved) => {
      if (builtinModules.includes(source)) return false;

      const internalDeps = [".", "/", "@/", "tslib"];
      const externalDeps = ["unative", "react"];

      if (internalDeps.some((el) => source.startsWith(el))) {
        return false;
      }

      if (externalDeps.some((el) => source.startsWith(el))) {
        return true;
      }

      if (!otherDepsToCheck.includes(source)) {
        otherDepsToCheck.push(source);
        console.log("dev => source", source);
      }

      return false;
    },
  },
];

export default options;
