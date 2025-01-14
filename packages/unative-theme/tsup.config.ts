import { exec } from "child_process";
import reactUseClient from "esbuild-react18-useclient";
import * as fs from "fs";
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

export default defineConfig(() => {
  return {
    entry: [
      "./src/index.ts",
      "./src/with-unative/index.ts",
      "./src/provider/native.ts",
      "./src/provider/web.ts",
      "./src/provider/use-theme.ts",
      "./src/native/primitives/index.ts",
    ],
    format: ["esm", "cjs"],
    outDir: "dist",
    splitting: true,
    sourcemap: false,
    dts: true,
    treeshake: false,
    metafile: false,
    clean: true,
    publicDir: "public",
    minify: true,
    silent: false,
    esbuildPlugins: [reactUseClient],
    esbuildOptions(options) {
      options.chunkNames = "chunks/[name]-[hash]";
    },
    external: [
      ...externalDependencies,
      "@types/react",
      "react-native-css-interop",
      "fs",
      "path",
    ],
    async onSuccess() {
      console.log("dev => success");
      await run("cp ../../README.md ./dist/README.md");
      await run("npx tsx package-json-generator.ts");
    },
  };
});
