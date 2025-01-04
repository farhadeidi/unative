import { exec } from "child_process";
import reactUseClient from "esbuild-react18-useclient";
import * as fs from "fs";
import glob from "glob";
import { defineConfig } from "tsup";

function run(cmd: string) {
  return new Promise((resolve, reject) => {
    exec(cmd, (error, stdout, stderr) => {
      if (error) return reject(error);
      if (stderr) return reject(stderr);
      resolve(stdout);
    });
  });
}

const extractPeerDependencies = () => {
  const packageJson = JSON.parse(fs.readFileSync("./package.json", "utf-8"));
  const peerDependencies = packageJson.peerDependencies || {};
  return Object.keys(peerDependencies);
};
const externalDependencies = extractPeerDependencies();

export default defineConfig((options) => {
  return {
    entry: [...glob.sync("./src/**/*.ts", "./src/**/*.tsx")],
    format: ["esm", "cjs"],
    outDir: "dist",
    splitting: true,
    sourcemap: false,
    dts: true,
    treeshake: false,
    metafile: true,
    clean: !!options.watch ? false : true,
    publicDir: "public",
    silent: false,
    esbuildPlugins: [reactUseClient],
    esbuildOptions(options) {
      options.chunkNames = "chunks/[name]-[hash]";
    },
    external: [
      ...externalDependencies,
      "@types/react",
      "react-native-css-interop",
    ],
    async onSuccess() {
      console.log("dev => success");
      await run("cp ../../README.md ./dist/README.md");
      await run("npx tsx package-json-generator.ts");
    },
  };
});
