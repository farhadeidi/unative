/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-undef */
import { exec } from "child_process";
import { glob } from "glob";
import { builtinModules } from "module";
import { fileURLToPath, URL } from "node:url";
import path from "path";
import alias from "@rollup/plugin-alias";
import resolve from "@rollup/plugin-node-resolve";
import typescript from "@rollup/plugin-typescript";

// Resolve __dirname for ES module
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

import * as fs from "fs";
import commonjs from "@rollup/plugin-commonjs";

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
      console.log("Build process completed!");
      await run("npx tsx ensure-use-client.ts");
      await run("cp ../../README.md ./dist/README.md");
      await run("cp ./nativewind-env.d.ts ./dist/nativewind-env.d.ts");
      await run("npx tsx package-json-generator.ts");
    },
  };
}

const extractPeerDependencies = () => {
  const packageJson = JSON.parse(fs.readFileSync("./package.json", "utf-8"));
  const peerDependencies = packageJson.peerDependencies || {};
  const dependencies = packageJson.dependencies || {};
  return Object.keys({ ...dependencies, ...peerDependencies });
};
const externalDependencies = extractPeerDependencies();

/** @type {import('rollup').RollupOptions} */
const options = {
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
      chunkFileNames: "chunks/[name]-[hash].js",
      // banner: `"use client";`,
    },
    {
      dir: "dist",
      format: "cjs",
      entryFileNames: "[name].cjs",
      chunkFileNames: "chunks/[name]-[hash].cjs",
      exports: "auto",
    },
  ],
  plugins: [resolve(), typescript(), runOnSuccessPlugin()],
  external: (source, importer, isResolved) => {
    if (builtinModules.includes(source)) return false;

    if (
      source.startsWith(".") ||
      source.startsWith("/") ||
      source.startsWith("@/")
    ) {
      return false;
    }

    const otherExceptions = [
      "@unative/primitives",
      "react",
      "react-native",
      "@react-native-async-storage",
      "@react-navigation",
      "zustand",
      "nativewind",
      "clsx",
      "tailwind-merge",
      "class-variance-authority",
      "lucide-react",
      "tailwind-variants",
      "@react-native-segmented-control/segmented-control",
    ];
    if (otherExceptions.some((exception) => source.startsWith(exception))) {
      return true;
    }

    console.log("dev => source", source);

    return false;
  },
  // external: [
  //   ...externalDependencies,
  //   "unative",
  //   "@unative/primitives",
  //   /node_modules/,
  // ],
};

export default options;
