import resolve from "@rollup/plugin-node-resolve";
import typescript from "@rollup/plugin-typescript";
import glob from "glob";
import path from "path";
import { fileURLToPath } from "node:url";
import * as fs from "fs";
import commonjs from "@rollup/plugin-commonjs";
import preserveDirectives from "rollup-plugin-preserve-directives";

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
  treeshake: true,
  watch: {
    onEnd: () => {
      console.log("watch onEnd");
    },
  },
  output: {
    format: "es",
    dir: "dist",
    chunkFileNames: "chunks/[name]-[hash].js",
    banner: "'use client';",
  },
  plugins: [resolve(), typescript({})],
  external: [...externalDependencies, "@unative/universal", /node_modules/],
};

export default options;
