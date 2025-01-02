import type { NextConfig } from "next";
import { withUnative } from "unative/with-unative";

const nextConfig: NextConfig = {
  /* config options here */
};

export default withUnative(nextConfig, {
  css: "./src/app/globals.css",
  outputDir: "./src/lib/unative",
});
