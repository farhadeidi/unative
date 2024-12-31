import { defineConfig } from "tsup";

export default defineConfig(() => {
  return {
    entry: ["src/**/*.{js,jsx,ts,tsx}"],
    format: ["cjs", "esm"],
    outDir: "dist",
    splitting: true,
    sourcemap: false,
    dts: true,
    treeshake: true,
    clean: true,
    publicDir: "public",
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
  };
});
