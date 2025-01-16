import resolve from "@rollup/plugin-node-resolve";
import typescript from "@rollup/plugin-typescript";
import glob from "glob";
import path from "path";
import { fileURLToPath } from "node:url";
import * as fs from "fs";
import commonjs from "@rollup/plugin-commonjs";

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
  treeshake: true,
  output: {
    format: "es",
    dir: "dist",
    chunkFileNames: "chunks/[name]-[hash].js",
  },
  plugins: [resolve(), commonjs(), typescript({ tsconfig: "./tsconfig.json" })],
  external: [...externalDependencies],
};

export default options;
