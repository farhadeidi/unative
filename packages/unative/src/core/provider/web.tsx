"use client";

import React, { useEffect, useState } from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { useTheme as useNextTheme } from "next-themes";

// import { useTheme } from "../hooks/use-theme";
import { ColorSchemes, ProviderProps, UnativeThemeVariables } from "../types";
import { configureThemeScript } from "../utils/theme-script";

import { CommonProvider } from "./common";

const getTheme = (key: string, fallback?: string) => {
  if (typeof window === "undefined") return undefined;
  let theme;
  try {
    theme = localStorage.getItem(key) || undefined;
  } catch {
    // Unsupported
  }
  return theme || fallback;
};

export const applyCssVars = (values: UnativeThemeVariables) => {
  Object.entries(values).forEach(([key, value]) => {
    document.documentElement.style.setProperty(`${key}`, value);
  });
};

export const Provider = ({ children, ...props }: ProviderProps) => {
  return (
    <React.Fragment>
      <script
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: `(${configureThemeScript.toString()})(${JSON.stringify(Object.keys(props.themes))})`,
        }}
      />
      <NextThemesProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
        enableColorScheme
      >
        <InnerProvider {...props}>{children}</InnerProvider>
      </NextThemesProvider>
    </React.Fragment>
  );
};

const InnerProvider = ({ children, ...props }: ProviderProps) => {
  const [activeTheme, setActiveTheme] = useState(
    getTheme("theme-brown", "default"),
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

    configureThemeScript(Object.keys(props.themes), themeName);
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
      isWeb={true}
    >
      <ThemeVariablesHandler>{children}</ThemeVariablesHandler>
    </CommonProvider>
  );
};

const ThemeVariablesHandler = ({ children }: { children: React.ReactNode }) => {
  // const nextTheme = useNextTheme();
  // const { theme, isInitialized, rawThemes, isDarkMode } = useTheme();

  // useEffect(() => {
  //   applyCssVars(rawThemes[theme.name][isDarkMode ? "dark" : "light"]);
  // }, [rawThemes, isInitialized, theme, nextTheme]);

  return <React.Fragment>{children}</React.Fragment>;
};
