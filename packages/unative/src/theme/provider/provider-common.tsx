"use client";

import { useEffect, useState } from "react";

import type {
  ColorSchemes,
  ProviderProps,
  UnativeThemes,
} from "../types/theme-types";

import type { ThemeState } from "./context";
import { ProviderContext } from "./context";
import { themeUtils } from "./theme-utils";

const isDev = process.env.NODE_ENV === "development";

export type CommonProviderProps = ProviderProps & {
  savedScheme: ColorSchemes;
  savedTheme: string;
  isDarkMode: boolean;
  onColorSchemeChange: (scheme: ColorSchemes) => void;
  onThemeChange: (value: string) => void;
  isParentInitialized: boolean;
  isWeb: boolean;
};

export const CommonProvider = ({
  children,
  themes: rawThemes,
  isDarkMode,
  savedScheme,
  savedTheme,
  onColorSchemeChange,
  onThemeChange,
  isParentInitialized,
  isWeb = false,
  onInitEnd,
}: CommonProviderProps) => {
  const [isInitialized, setIsInitialized] = useState(false);
  const [themes, setThemes] = useState<UnativeThemes>(rawThemes);
  const [cssVariables, setCssVariables] = useState<UnativeThemes>(rawThemes);
  const [theme, setTheme] = useState<ThemeState>({
    name: "default",
    scheme: isDarkMode ? "dark" : "light",
    savedScheme,
    values: {},
  });

  useEffect(() => {
    const init = async () => {
      let optimizedThemes = { ...themes };

      if (isDev || !isInitialized) {
        const optimizedValues = themeUtils.getOptimizedThemes({
          themes: rawThemes,
          isWeb: isWeb,
          baseRemSize: 16,
        });

        optimizedThemes = optimizedValues.optimizedThemes;
        setThemes(optimizedThemes);
        setCssVariables(optimizedValues.cssVars);
      }
      const themeName = savedTheme || "default";
      setTheme({
        name: themeName,
        scheme: isDarkMode ? "dark" : "light",
        savedScheme: savedScheme,
        values: optimizedThemes[themeName][isDarkMode ? "dark" : "light"],
      });
      setIsInitialized(true);
      onInitEnd?.();
    };
    if (isParentInitialized) {
      init();
    }
  }, [
    isInitialized,
    rawThemes,
    savedScheme,
    savedTheme,
    isDarkMode,
    isParentInitialized,
  ]);

  return (
    <ProviderContext.Provider
      // key={isInitialized ? "initialized" : "not-initialized"}
      value={{
        config: {},
        rawThemes: rawThemes,
        themes: themes,
        theme: theme,
        cssVariables: cssVariables,

        savedColorScheme: savedScheme,
        colorSchemes: ["dark", "light", "system"] as ColorSchemes[],
        colorScheme: isDarkMode ? "dark" : "light",
        isDarkMode,

        setScheme: onColorSchemeChange,
        setTheme: onThemeChange,
        isInitialized,
      }}
    >
      {children}
    </ProviderContext.Provider>
  );
};
