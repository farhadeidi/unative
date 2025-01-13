import { defaultPlugins, defineConfig } from "@hey-api/openapi-ts";

export default defineConfig({
  client: "@hey-api/client-fetch",
  input: "./src/tmdb/tmdb-openapi.json",
  output: {
    lint: "eslint",
    format: "prettier",
    path: "./src/tmdb/client",
  },
  plugins: [
    ...defaultPlugins,
    "@hey-api/schemas",
    {
      dates: true,
      name: "@hey-api/transformers",
    },
    {
      enums: "javascript",
      name: "@hey-api/typescript",
    },
    "@tanstack/react-query",
  ],
});
