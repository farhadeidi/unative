"use client";

import { createContext } from "react";

import type {
  ColorSchemes,
  UnativeConfig,
  UnativeThemes,
  UnativeThemeVariables,
} from "../types/theme-types";

export type ThemeState = {
  name: string;
  scheme: "light" | "dark";
  savedScheme: ColorSchemes;
  values: UnativeThemeVariables;
};

export type ProviderContextProps = {
  themes: UnativeThemes;
  rawThemes: UnativeThemes;
  cssVariables: UnativeThemes;
  config: UnativeConfig;
  theme: ThemeState;
  rawThemeValues?: UnativeThemeVariables;

  colorSchemes: ColorSchemes[];
  savedColorScheme: ColorSchemes;
  colorScheme: ColorSchemes;
  isDarkMode: boolean;

  setScheme: (scheme: ColorSchemes) => void;
  setTheme: (themeName: string) => void;

  isInitialized: boolean;
};

export const ProviderContext = createContext<ProviderContextProps | null>(null);
