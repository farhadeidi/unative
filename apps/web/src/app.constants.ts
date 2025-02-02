const isDev = process.env.NODE_ENV === "development";
export const appConstants = {
  META_TITLE: "Unative",
  META_DESCRIPTION: "One universal UI library for web and mobile",

  DOMAIN_FULL_URL: isDev ? "http://localhost:3000" : "https://unative.dev",
  DOMAIN_SHORT_URL: "unative.dev",

  GITHUB_REPO_URL: "https://github.com/farhadeidi/unative",
};
