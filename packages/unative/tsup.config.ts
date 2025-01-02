import { defineConfig } from "tsup";
import { exec } from "child_process";
import reactUseClient from "esbuild-react18-useclient";

function run(cmd: string) {
  return new Promise((resolve, reject) => {
    exec(cmd, (error, stdout, stderr) => {
      if (error) return reject(error);
      if (stderr) return reject(stderr);
      resolve(stdout);
    });
  });
}

export default defineConfig((options) => {
  return {
    entry: [
      "./src/index.ts",
      "./src/index.native.ts",
      "./src/styles.css",

      "./src/ui/index.ts",
      "./src/ui/index.native.ts",

      "./src/ui/components/box/index.ts",
      "./src/ui/components/box/index.native.ts",
      "./src/ui/components/text/index.ts",
      "./src/ui/components/text/index.ts",
      "./src/ui/components/button/index.native.ts",
      "./src/ui/components/button/index.native.ts",

      "./src/core/types.ts",
      "./src/core/index.ts",
      "./src/core/index.native.ts",

      "./src/with-unative/index.ts",
    ],
    format: ["esm", "cjs"],
    outDir: "dist",
    splitting: true,
    sourcemap: false,
    dts: true,
    treeshake: true,
    clean: true,
    // clean: !options.watch,
    publicDir: "public",
    esbuildPlugins: [reactUseClient],
    esbuildOptions(options, context) {
      options.chunkNames = "chunks/[name]-[hash]";
      // options.banner = {
      //   js: '"use client"',
      // };
    },

    external: [
      "react",
      "react-dom",
      "@types/react",
      "react-native",
      "nativewind",
      "react-native-css-interop",
      "tailwindcss",
      "clsx",
      "tailwind-merge",
      "tailwind-variants",
      "react-native-safe-area-context",
      "@react-native-async-storage/async-storage",
    ],
    async onSuccess() {
      await run("cp ../../README.md ./dist/README.md");
      await run("cp ./package.json ./dist/package.json");
    },
  };
});
