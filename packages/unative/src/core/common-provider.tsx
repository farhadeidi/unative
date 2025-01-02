"use client";

import { useEffect, useState } from "react";
import { ColorSchemes, ProviderProps, UnativeThemes } from "./types";
import { ProviderContext, ThemeState } from "./provider-context";
import { DEFAULT_THEMES } from "./default-themes";
import { themeUtils } from "./utils/theme-utils";

export type CommonProviderProps = ProviderProps & {
  savedScheme: ColorSchemes;
  savedTheme: string;
  isDarkMode: boolean;
  onColorSchemeChange: (scheme: ColorSchemes) => void;
  onThemeChange: (value: string) => void;
  isParentInitialized: boolean;
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
}: CommonProviderProps) => {
  const [isInitialized, setIsInitialized] = useState(false);
  const [themes, setThemes] = useState<UnativeThemes>(rawThemes);
  const [theme, setTheme] = useState<ThemeState>({
    name: "default",
    scheme: isDarkMode ? "dark" : "light",
    savedScheme,
    values: DEFAULT_THEMES[isDarkMode ? "dark" : "light"],
  });

  useEffect(() => {
    const init = async () => {
      let optimizedThemes = { ...themes };
      if (!isInitialized) {
        optimizedThemes = themeUtils.getOptimizedThemes({
          themes: rawThemes,
        }).optimizedThemes;
        setThemes(optimizedThemes);
      }
      const themeName = savedTheme || "default";
      setTheme({
        name: themeName,
        scheme: isDarkMode ? "dark" : "light",
        savedScheme: savedScheme,
        values: optimizedThemes[themeName][isDarkMode ? "dark" : "light"],
      });
      setIsInitialized(true);
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
      key={isInitialized ? "initialized" : "not-initialized"}
      value={{
        config: {},
        rawThemes: rawThemes,
        themes: themes,
        theme: theme,

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
