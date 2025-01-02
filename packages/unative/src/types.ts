import type { DefaultThemeVariables } from "./theme/common/default-themes";

export type UnativeConfig = {};

export type UnativeThemeVariables = DefaultThemeVariables &
  (Record<string, string> | {});

export type UnativeThemes = {
  [K: string]: {
    light: UnativeThemeVariables;
    dark: UnativeThemeVariables;
  };
};

export type ColorSchemes = "light" | "dark" | "system";
