/** @jsxImportSource nativewind */

import React, { useCallback, useEffect, useState } from "react";
import { UnativeConfig, UnativeThemes } from "../../types";
import { View } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { ThemeContext } from "../common/theme-context";
import { useColorScheme } from "../../hooks/use-color-scheme.native";
import { themeUtils } from "./native-theme-utils";
import { vars } from "nativewind";

type NativeWindThemeVars = {
  [K: string]: {
    light: Record<string, string>;
    dark: Record<string, string>;
  };
};
const getNativeWindThemeVars = (values: {
  themes: UnativeThemes;
}): NativeWindThemeVars => {
  let themes: NativeWindThemeVars = {};

  Object.keys(values.themes).forEach((el) => {
    const lightVars = themeUtils.getOptimizedSizes({
      theme: values.themes[el].light,
      baseSize: 16,
    });
    const darkVars = themeUtils.getOptimizedSizes({
      theme: values.themes[el].dark,
      baseSize: 16,
    });
    // console.log("dev => themes", lightVars);

    themes[el as string] = {
      light: vars(lightVars as Record<string, string>),
      dark: vars(darkVars as Record<string, string>),
    };
  });

  return themes;
};

export type ProviderProps = {
  children?: React.ReactNode;
  themes: UnativeThemes;
  config: UnativeConfig;
  defaultTheme?: string;
  onInitEnd?: () => void | Promise<void>;
};

export const Provider = ({
  children,
  themes,
  config,
  defaultTheme = "default",
  onInitEnd,
}: ProviderProps) => {
  const [activeTheme, setActiveTheme] = useState(defaultTheme);
  const [isInitialized, setIsInitialized] = useState(false);
  const { isDarkMode } = useColorScheme();

  const getThemes = useCallback(() => {
    const data = getNativeWindThemeVars({ themes });
    return data;
  }, [themes]);

  useEffect(() => {
    const init = async () => {
      try {
        const savedTheme = await AsyncStorage.getItem("unative_theme");
        const isThemeExists =
          !!savedTheme && Object.keys(themes).includes(savedTheme);
        if (isThemeExists) {
          setActiveTheme(savedTheme);
        } else {
          const isDefaultThemeExists =
            Object.keys(themes).includes(defaultTheme);
          setActiveTheme(isDefaultThemeExists ? defaultTheme : "default");
        }
      } catch {
      } finally {
        setIsInitialized(true);
      }
    };
    init();
  }, [defaultTheme]);

  useEffect(() => {
    if (isInitialized && onInitEnd) {
      onInitEnd();
    }
  }, [isInitialized]);

  if (!isInitialized) {
    return null;
  }
  return (
    <ThemeContext.Provider value={{ themes, config, activeTheme }}>
      <View
        style={[
          { flex: 1 },
          getThemes()[activeTheme][isDarkMode ? "dark" : "light"]!,
        ]}
      >
        {children}
      </View>
    </ThemeContext.Provider>
  );
};
