import { defineConfig } from "tsup";

export default defineConfig(() => {
  return {
    entry: ["src/**/*.{js,jsx,ts,tsx}"],
    format: ["cjs", "esm"],
    outDir: "dist",
    splitting: true,
    sourcemap: true,
    dts: true,
    treeshake: true,
    clean: false,
    external: [
      "react",
      "react-dom",
      "react-native",
      "nativewind",
      "tailwindcss",
      "clsx",
      "tailwind-merge",
      "tailwind-variants",
    ],
  };
});
