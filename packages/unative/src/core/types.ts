import type { DefaultThemeVariables } from "./default-themes";

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

export type ProviderProps = {
  children?: React.ReactNode;
  themes: UnativeThemes;
  config?: UnativeConfig;
  defaultTheme?: string;
  onInitEnd?: () => void | Promise<void>;
};
