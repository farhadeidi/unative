import { createContext } from "react";
import { UnativeConfig, UnativeThemes } from "../../types";

export type ThemeContextProps = {
  themes: UnativeThemes;
  config: UnativeConfig;
  activeTheme: string;
};

export const ThemeContext = createContext<ThemeContextProps>(null);
