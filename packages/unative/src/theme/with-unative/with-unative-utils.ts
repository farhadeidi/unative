import fs from "fs";
import path from "path";

const getVariablesByPartialCssString = (
  content: string,
): { [key: string]: string } => {
  const variables: { [key: string]: string } = {};
  const variableRegex = /([^:]+):\s*([^;]+);/g;
  let match;

  while ((match = variableRegex.exec(content)) !== null) {
    if (!!match[1] && !!match[2]) {
      const key = match[1].trim();
      const value = match[2].trim();
      variables[key] = value;
    }
  }

  return variables;
};

interface ExtractedThemeVariables {
  [key: string]: {
    [key: string]: { [key: string]: string };
  };
}

const getThemesByCssContentString = (
  cssContent: string,
): ExtractedThemeVariables => {
  const themeVariables: ExtractedThemeVariables = {};
  const themeRegex = /\.theme-([a-zA-Z-]+)\s*{([^}]*)}/g;
  const rootRegex = /:root\s*{([^}]*)}/;
  const globalDarkRegex = /\.dark\s*{([^}]*)}/;

  // Extract root (light) theme
  const rootMatch = rootRegex.exec(cssContent);
  if (rootMatch) {
    themeVariables.default = {
      light: {
        ...getVariablesByPartialCssString(rootMatch[1]!),
      },
    };
  } else {
    themeVariables.default = {
      light: {},
    };
  }
  // Extract global dark theme
  const globalDarkMatch = globalDarkRegex.exec(cssContent);
  if (globalDarkMatch) {
    themeVariables.default.dark = {
      ...(globalDarkMatch[1]
        ? getVariablesByPartialCssString(globalDarkMatch[1])
        : {}),
    };
  } else {
    themeVariables.default.dark = {};
  }

  let themeMatch;
  while ((themeMatch = themeRegex.exec(cssContent)) !== null) {
    const themeName = themeMatch[1] || "unknown";
    const themeContent = themeMatch[2];

    const lightVariables = getVariablesByPartialCssString(
      themeContent?.split("&.dark")[0],
    );
    let darkVariables: { [key: string]: string } = {};

    // Add a closing brace to ensure the regex can match the nested dark theme
    const darkMatch = (themeContent + "}").match(/&\.dark\s*{([^}]+)}/);
    const nestedDarkMatch = darkMatch ? darkMatch[1]?.trim() : undefined;

    if (nestedDarkMatch) {
      darkVariables = getVariablesByPartialCssString(nestedDarkMatch);
    }

    themeVariables[themeName] = {
      light: { ...lightVariables },
      dark: { ...darkVariables },
    };
  }

  return themeVariables;
};

const getThemeVariablesJsonString = ({
  cssFileContent,
}: {
  cssFileContent: string;
}) => {
  return getThemesByCssContentString(cssFileContent);
};

const getThemesFileStringToWrite = ({
  themeVariables,
}: {
  themeVariables: ExtractedThemeVariables;
}) => {
  const defaultLight = themeVariables.default?.light || {};
  const defaultDark = themeVariables.default?.dark || {};

  const addSpreadSyntax = (themeName: string) => {
    const theme = themeVariables[themeName];
    if (!theme || !theme.light) return "";
    const hasDarkKeys = !!theme.dark && Object.keys(theme.dark)?.length > 0;

    const darkVars = { ...(theme.light || {}), ...(theme.dark || {}) };

    return `
  "${themeName}": {
    "light": {
      ...DEFAULT_THEME_LIGHT,
      ${Object.entries(theme.light)
        .map(([key, value]) => `"${key}": "${value}"`)
        .join(",\n      ")}
    },
    "dark": {
      ...DEFAULT_THEME_DARK,${
        hasDarkKeys
          ? `
      ${Object.entries(darkVars)
        .map(([key, value]) => `"${key}": "${value}"`)
        .join(",\n      ")}
        `
          : ""
      }
    }
  }`;
  };

  const themesString = Object.keys(themeVariables)
    .filter((themeName) => themeName !== "default")
    .map((themeName) => addSpreadSyntax(themeName))
    .join(",\n");

  // const themeNames = Object.keys(themeVariables);

  const fileContent = `
import type { UnativeThemes, UnativeThemeVariables } from "unative/theme";

/*
** Auto generated code. Don't modify manually.
** This file is generated by theme-colors-extractor.ts.
** It provides a map of theme colors for different schemes.
*/

export const DEFAULT_THEME_LIGHT: UnativeThemeVariables = ${JSON.stringify(defaultLight, null, 2)};

export const DEFAULT_THEME_DARK: UnativeThemeVariables = ${JSON.stringify({ ...defaultLight, ...defaultDark }, null, 2)};

export const THEMES: UnativeThemes = {
  "default": {
    "light": DEFAULT_THEME_LIGHT,
    "dark": DEFAULT_THEME_DARK,
  },
${themesString}
}`;

  return fileContent;
};

const getFileDataAsString = async ({ filePath }: { filePath: string }) => {
  const content = fs.readFileSync(filePath, "utf8");
  return content;
};

const writeFileContent = async ({
  filePath,
  content,
}: {
  filePath: string;
  content: string;
}) => {
  const dirPath = path.dirname(filePath);

  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
    console.log("Directory created:", dirPath);
  } else {
    console.log("Directory already exists:", dirPath);
  }

  fs.writeFile(filePath, content, { flag: "w", encoding: "utf-8" }, (err) => {
    if (err) {
      console.error("Error writing to file:", err.message);
    } else {
      console.log("File created or replaced successfully!");
    }
  });
};

export const utils = {
  getThemeVariablesJsonString,
  getFileDataAsString,
  getThemesFileStringToWrite,
  writeFileContent,
};
