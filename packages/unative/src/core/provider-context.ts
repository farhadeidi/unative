import { createContext } from "react";
import {
  ColorSchemes,
  UnativeConfig,
  UnativeThemes,
  UnativeThemeVariables,
} from "../types";

export type ThemeState = {
  name: string;
  scheme: "light" | "dark";
  appliedScheme: ColorSchemes;
  values: UnativeThemeVariables;
};

export type ProviderContextProps = {
  themes: UnativeThemes;
  rawThemes: UnativeThemes;
  config: UnativeConfig;
  theme: ThemeState;
  rawThemeValues?: UnativeThemeVariables;
  schemes: ColorSchemes[];
  setScheme: (scheme: ColorSchemes) => void;
  setTheme: (themeName: string) => void;
  isInitialized: boolean;
};

export const ProviderContext = createContext<ProviderContextProps>(null);
