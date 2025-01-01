import { createContext } from "react";
import {
  UnativeConfig,
  UnativeThemes,
  UnativeThemeVariables,
} from "../../types";

export type ThemeState = {
  name: string;
  scheme: "light" | "dark";
  values: UnativeThemeVariables;
};
export type ThemeContextProps = {
  themes: UnativeThemes;
  rawThemes: UnativeThemes;
  config: UnativeConfig;
  theme: ThemeState;
  rawThemeValues: UnativeThemeVariables;
};

export const ThemeContext = createContext<ThemeContextProps>(null);
