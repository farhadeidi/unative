import type { DefaultThemeVariables } from "./theme/common/default-themes";

export type UnativeConfig = {};

export type UnativeThemeVariables = DefaultThemeVariables &
  (
    | {
        [K: string]: Record<string, string>;
      }
    | {}
  );

export type UnativeThemes = {
  [K: string]: {
    light: UnativeThemeVariables;
    dark: UnativeThemeVariables;
  };
};
