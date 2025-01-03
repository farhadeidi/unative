"use client";

import React, { useEffect, useState } from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { ColorSchemes, ProviderProps, UnativeThemeVariables } from "./types";
import { useTheme as useNextTheme } from "next-themes";
import { CommonProvider } from "./common-provider";
import { useTheme } from "./use-theme";

const applyCssVars = (values: UnativeThemeVariables) => {
  Object.entries(values).forEach(([key, value]) => {
    document.documentElement.style.setProperty(`${key}`, value);
  });
};

export const Provider = ({ children, ...props }: ProviderProps) => {
  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <InnerProvider {...props}>{children}</InnerProvider>
    </NextThemesProvider>
  );
};

const InnerProvider = ({ children, ...props }: ProviderProps) => {
  const [activeTheme, setActiveTheme] = useState(
    localStorage.getItem("unative-theme-name") || "default"
  );
  const [isInitialized, setIsInitialized] = useState(false);

  const {
    theme: activeColorScheme,
    systemTheme,
    setTheme: setActiveColorScheme,
  } = useNextTheme();

  const onThemeChange = async (themeName: string) => {
    const isExists = props.themes.hasOwnProperty(themeName);
    if (isExists) {
      setActiveTheme(themeName);
      localStorage.setItem("unative-theme-name", themeName);
    } else {
      setActiveTheme("default");
      localStorage.setItem("unative-theme-name", "default");
    }
  };

  const onColorSchemeChange = async (value: ColorSchemes) => {
    const schemes: ColorSchemes[] = ["light", "dark", "system"];
    if (schemes.includes(value)) {
      setActiveColorScheme(value);
      localStorage.setItem("unative-theme-scheme", value);
      return;
    }
  };

  useEffect(() => {
    const init = async () => {
      try {
        const savedThemeName = localStorage.getItem("unative-theme-name");
        onThemeChange(savedThemeName || "default");

        const savedScheme = localStorage.getItem("unative-theme-scheme");
        onColorSchemeChange(savedScheme as ColorSchemes);
      } catch (err) {
        console.error(err);
      } finally {
        setIsInitialized(true);
      }
    };
    init();
  }, []);

  return (
    <CommonProvider
      {...props}
      isDarkMode={
        activeColorScheme === "system"
          ? systemTheme === "dark"
          : activeColorScheme === "dark"
      }
      savedScheme={activeColorScheme as ColorSchemes}
      onColorSchemeChange={onColorSchemeChange}
      onThemeChange={onThemeChange}
      isParentInitialized={isInitialized}
      savedTheme={activeTheme}
    >
      <ThemeVariablesHandler>{children}</ThemeVariablesHandler>
    </CommonProvider>
  );
};

const ThemeVariablesHandler = ({ children }: { children: React.ReactNode }) => {
  const nextTheme = useNextTheme();
  const { theme, isInitialized, rawThemes, isDarkMode } = useTheme();

  useEffect(() => {
    if (isInitialized) {
      applyCssVars(rawThemes[theme.name][isDarkMode ? "dark" : "light"]);
    }
  }, [rawThemes, isInitialized, theme, nextTheme]);
  return <React.Fragment>{children}</React.Fragment>;
};
