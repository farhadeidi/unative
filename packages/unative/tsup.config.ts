import { defineConfig } from "tsup";
import { exec } from "child_process";
import reactUseClient from "esbuild-react18-useclient";
import glob from "glob";

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
      ...glob.sync("./src/**/*.ts"),
      // "./src/index.ts",
      // "./src/index.web.ts",
      // "./src/index.rsc.ts",

      // // Core Components`
      // "./src/core/index.ts",
      // "./src/core/index.rsc.ts",
      "./src/core/common-provider.tsx",
      "./src/core/default-themes.ts",
      "./src/core/web-provider.tsx",
      // "./src/core/use-theme.ts",

      // // Primitives
      // "./src/ui/primitives/index.ts",
      // "./src/ui/primitives/index.web.ts",
      // "./src/ui/primitives/index.rsc.ts",

      // // UI Components
      // "./src/ui/core/index.ts",
      // "./src/ui/core/index.web.ts",
      // "./src/ui/core/index.rsc.ts",

      // // UI Modules
      // "./src/ui/m/theme-switch/index.ts",
      // "./src/ui/m/theme-switch/index.rsc.ts",

      // // With Unative
      // "./src/with-unative/index.ts",
      // "./src/with-unative/index.rsc.ts",
    ],
    format: ["esm", "cjs"],
    outDir: "dist",
    splitting: true,
    sourcemap: false,
    dts: true,
    treeshake: false,
    metafile: true,
    clean: !!options.watch ? false : true,
    publicDir: "public",
    esbuildPlugins: [reactUseClient],
    esbuildOptions(options, context) {
      options.chunkNames = "chunks/[name]-[hash]";
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
