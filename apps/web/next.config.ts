import type { NextConfig } from "next";
import { withUnative } from "unative/theme/with-unative";

const nextConfig: NextConfig = {
  transpilePackages: ["unative"],
  /* config options here */
};

export default withUnative(nextConfig, {
  css: "./src/app/globals.css",
  outputDir: "./src/lib/unative",
});
