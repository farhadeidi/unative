import { exec } from "child_process";
import glob from "glob";
import { fileURLToPath, URL } from "node:url";
import path from "path";
import resolve from "@rollup/plugin-node-resolve";
import typescript from "@rollup/plugin-typescript";

// Resolve __dirname for ES module
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

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
  output: {
    format: "es",
    dir: "dist",
    chunkFileNames: "chunks/[name]-[hash].js",
    // banner: `"use client";`,
  },
  plugins: [
    resolve(),
    // alias({
    //   entries: [
    //     { find: "@/hooks", replacement: path.resolve(__dirname, "src/hooks") },
    //     {
    //       find: "@/components",
    //       replacement: path.resolve(__dirname, "src/components"),
    //     },
    //     { find: "@/utils", replacement: path.resolve(__dirname, "src/utils") },
    //   ],
    // }),
    typescript(),
    runOnSuccessPlugin(),
  ],
  external: [
    ...externalDependencies,
    "unative",
    "@unative/primitives",
    /node_modules/,
  ],
};

export default options;
