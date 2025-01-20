import prettier from "eslint-plugin-prettier";
import simpleImportSort from "eslint-plugin-simple-import-sort";
import path from "node:path";
import { fileURLToPath } from "node:url";
import js from "@eslint/js";
import { FlatCompat } from "@eslint/eslintrc";
import { projectStructurePlugin } from "eslint-plugin-project-structure";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
});

export default [
  {
    ignores: ["dist/*", "**/expo-env.d.ts"],
  },
  ...compat.extends("expo", "prettier"),
  {
    plugins: {
      prettier,
      "project-structure": projectStructurePlugin,
      "simple-import-sort": simpleImportSort,
    },

    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
    },

    rules: {
      "prettier/prettier": "error",
      "react-hooks/exhaustive-deps": "off",
      "@typescript-eslint/no-empty-object-type": "off",
      "no-empty-pattern": "off",
      "@typescript-eslint/consistent-type-imports": "error",

      "@typescript-eslint/no-unused-vars": [
        "warn",
        {
          args: "all",
          argsIgnorePattern: "^_",
          caughtErrors: "all",
          caughtErrorsIgnorePattern: "^_",
          destructuredArrayIgnorePattern: "^_",
          varsIgnorePattern: "^_",
          ignoreRestSiblings: true,
        },
      ],

      "simple-import-sort/imports": "error",
      "simple-import-sort/exports": "error",
    },
  },
  {
    files: ["**/*.js", "**/*.ts", "**/*.tsx"],

    rules: {
      "simple-import-sort/imports": [
        "error",
        {
          groups: [
            ["^.+\\.s?css$", "^\\u0000"],
            ["^react$", "^next", "^[a-z]", "^@[a-z]"],
            [
              "^@/api",
              "^@/lib",
              "^@/hooks",
              "^@/components",
              "^@/styles",
              "^@/features",
              "^@/assets",
              "^@/utils",
              "^@",
            ],
            ["^\\.\\.(?!/?$)", "^\\.\\./?$"],
            ["^\\./(?=.*/)(?!/?$)", "^\\.(?!/?$)", "^\\./?$"],
          ],
        },
      ],
    },
  },
];
