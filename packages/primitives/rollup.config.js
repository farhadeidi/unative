import resolve from "@rollup/plugin-node-resolve";
import typescript from "@rollup/plugin-typescript";
import glob from "glob";
import path from "path";
import { fileURLToPath } from "node:url";
import { exec } from "child_process";

import * as fs from "fs";

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
      await run("cp ../../README.md ./dist/README.md");
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
console.log("dev => externalDependencies", externalDependencies);

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
  treeshake: false,
  output: {
    format: "es",
    dir: "dist",
    chunkFileNames: "chunks/[name]-[hash].js",
    // banner: "'use client';",
  },
  plugins: [resolve(), typescript({}), runOnSuccessPlugin()],
  external: [...externalDependencies, /node_modules/],
};

export default options;
