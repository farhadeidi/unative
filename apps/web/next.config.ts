import type { NextConfig } from "next";
import { withUnative } from "unative/with-unative";
import createMDX from "@next/mdx";

const nextConfig: NextConfig = {
  transpilePackages: ["next-mdx-remote", "unative", "@unative/icons"],
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
  async redirects() {
    return [
      {
        source: "/docs",
        destination: "/docs/introduction",
        permanent: true,
      },
      {
        source: "/docs/setup",
        destination: "/docs/setup/react-native-expo",
        permanent: true,
      },
    ];
  },
};

const withMDX = createMDX({});

export default withUnative(withMDX(nextConfig), {
  css: "./src/app/globals.css",
  outputDir: "./src/lib/unative",
});
