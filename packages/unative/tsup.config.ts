import { defineConfig } from "tsup";
import { exec } from "child_process";

function run(cmd: string) {
  return new Promise((resolve, reject) => {
    exec(cmd, (error, stdout, stderr) => {
      if (error) return reject(error);
      if (stderr) return reject(stderr);
      resolve(stdout);
    });
  });
}

export default defineConfig(() => {
  return {
    entry: ["src/**/*.{js,jsx,ts}"],
    format: ["esm", "cjs"],
    outDir: "dist",
    splitting: true,
    sourcemap: false,
    dts: true,
    treeshake: true,
    clean: false,
    publicDir: "public",
    esbuildOptions(options, context) {
      options.chunkNames = "chunks/[name]-[hash]";
    },

    external: [
      "react",
      "react-dom",
      "@types/react",
      "react-native",
      "nativewind",
      "tailwindcss",
      "clsx",
      "tailwind-merge",
      "tailwind-variants",
      "react-native-safe-area-context",
    ],
    async onSuccess() {
      await run("cp ../../README.md ./dist/README.md");
      await run("cp ./package.json ./dist/package.json");
    },
  };
});
