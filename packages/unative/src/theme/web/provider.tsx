"use client";

import React, { useEffect } from "react";
import { ThemeContext } from "../common/theme-context";
import useProviderHandler from "./use-provider-handler";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import {
  UnativeConfig,
  UnativeThemes,
  UnativeThemeVariables,
} from "../../types";
import { useTheme as useNextTheme } from "next-themes";

const applyCssVars = (values: UnativeThemeVariables) => {
  Object.entries(values).forEach(([key, value]) => {
    document.documentElement.style.setProperty(`${key}`, value);
  });
};

export type ProviderProps = {
  children?: React.ReactNode;
  themes: UnativeThemes;
  config?: UnativeConfig;
  defaultTheme?: string;
  onInitEnd?: () => void | Promise<void>;
};

export const Provider = ({ children, ...props }: ProviderProps) => {
  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <ContextProvider {...props}>{children}</ContextProvider>
    </NextThemesProvider>
  );
};

const ContextProvider = ({ children, themes: rawThemes }: ProviderProps) => {
  const nextTheme = useNextTheme();
  const { isInitialized, theme, themes } = useProviderHandler({
    rawThemes,
    isDarkMode:
      nextTheme.theme === "system"
        ? nextTheme.systemTheme === "dark"
        : nextTheme.theme === "dark",
  });

  useEffect(() => {
    if (isInitialized) {
      const isDark =
        nextTheme.theme === "system"
          ? nextTheme.systemTheme === "dark"
          : nextTheme.theme === "dark";
      applyCssVars(rawThemes[theme.name][isDark ? "dark" : "light"]);
    }
  }, [rawThemes, isInitialized, theme, nextTheme]);

  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="system"
      enableSystem={true}
      disableTransitionOnChange
    >
      <ThemeContext.Provider
        value={{
          config: {},
          rawThemes: rawThemes,
          themes: themes,
          theme: theme,
        }}
      >
        {children}
      </ThemeContext.Provider>
    </NextThemesProvider>
  );
};
