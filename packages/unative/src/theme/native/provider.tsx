/** @jsxImportSource nativewind */

import React, { useCallback, useEffect, useState } from "react";
import {
  UnativeConfig,
  UnativeThemes,
  UnativeThemeVariables,
} from "../../types";
import { View } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { ThemeContext, ThemeState } from "../common/theme-context";
import { useColorScheme } from "../../hooks/use-color-scheme.native";
import { themeUtils } from "./native-theme-utils";
import { vars } from "nativewind";
import { DEFAULT_THEMES } from "../common";

type NativeWindThemeVars = {
  [K: string]: {
    light: Record<string, string>;
    dark: Record<string, string>;
  };
};

const getNativeWindThemeVars = (values: {
  themes: UnativeThemes;
}): { optimizedThemes: UnativeThemes; cssVars: NativeWindThemeVars } => {
  let optimizedThemes: UnativeThemes = {};
  let cssVars: NativeWindThemeVars = {};

  Object.keys(values.themes).forEach((el) => {
    const lightVars = themeUtils.getNativeOptimizedThemeValues({
      values: values.themes[el].light,
      baseRemSize: 16,
      isWeb: false,
    });
    const darkVars = themeUtils.getNativeOptimizedThemeValues({
      values: values.themes[el].dark,
      baseRemSize: 16,
      isWeb: false,
    });
    console.log("dev => themes", lightVars);

    optimizedThemes[el as string] = {
      light: lightVars as UnativeThemeVariables,
      dark: darkVars as UnativeThemeVariables,
    };

    cssVars[el as string] = {
      light: vars(lightVars as Record<string, string>),
      dark: vars(darkVars as Record<string, string>),
    };
  });

  return {
    optimizedThemes,
    cssVars,
  };
};

export type ProviderProps = {
  children?: React.ReactNode;
  themes: UnativeThemes;
  config?: UnativeConfig;
  defaultTheme?: string;
  onInitEnd?: () => void | Promise<void>;
};

export const Provider = ({
  children,
  themes: rawThemes,
  config,
  defaultTheme = "default",
  onInitEnd,
}: ProviderProps) => {
  const { isDarkMode } = useColorScheme();
  const [isInitialized, setIsInitialized] = useState(false);
  const [themes, setThemes] = useState<UnativeThemes>({});
  const [theme, setTheme] = useState<ThemeState>({
    name: "default",
    scheme: isDarkMode ? "dark" : "light",
    values: rawThemes.default[isDarkMode ? "dark" : "light"],
  });

  const getOptimizedThemes = useCallback(
    (values: UnativeThemes) => {
      const { optimizedThemes, cssVars } = getNativeWindThemeVars({
        themes: values ? values : { default: DEFAULT_THEMES },
      });

      return {
        optimizedThemes: optimizedThemes,
        cssVars: cssVars,
      };
    },
    [rawThemes]
  );

  useEffect(() => {
    const init = async () => {
      try {
        const initialThemes = getOptimizedThemes(rawThemes).optimizedThemes;

        let themeName = defaultTheme;
        const savedTheme = await AsyncStorage.getItem("unative_theme");
        const isThemeExists =
          !!savedTheme && Object.keys(rawThemes).includes(savedTheme);

        if (isThemeExists) {
          themeName = savedTheme;
        } else {
          const isDefaultThemeExists =
            Object.keys(rawThemes).includes(defaultTheme);
          themeName = isDefaultThemeExists ? defaultTheme : "default";
        }

        setThemes(initialThemes);
        setTheme({
          name: themeName,
          scheme: isDarkMode ? "dark" : "light",
          values: initialThemes[themeName][isDarkMode ? "dark" : "light"],
        });
        setIsInitialized(true);
      } catch {
      } finally {
        setIsInitialized(true);
      }
    };
    init();
  }, [defaultTheme, rawThemes, isDarkMode]);

  useEffect(() => {
    if (isInitialized && onInitEnd) {
      onInitEnd();
    }
  }, [isInitialized]);

  if (!isInitialized) {
    return null;
  }
  return (
    <ThemeContext.Provider
      value={{
        themes,
        config,
        theme,
        rawThemes,
        rawThemeValues: rawThemes[theme.name][theme.scheme],
      }}
    >
      <View
        style={[
          { flex: 1 },
          getOptimizedThemes(rawThemes).cssVars[theme.name][
            isDarkMode ? "dark" : "light"
          ]!,
        ]}
      >
        {children}
      </View>
    </ThemeContext.Provider>
  );
};
