/** @jsxImportSource nativewind */

import React, { useCallback, useEffect, useState } from "react";
import { useColorScheme, vars } from "nativewind";
import { Platform, View } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

// import { useTheme } from "../hooks/use-theme";
import { ColorSchemes, ProviderProps } from "../types";

import { CommonProvider } from "./provider-common";

export const Provider = ({ children, ...props }: ProviderProps) => {
  const [activeTheme, setActiveTheme] = useState("");
  const [activeColorScheme, setActiveColorScheme] =
    useState<ColorSchemes>("system");
  const [isInitialized, setIsInitialized] = useState(false);

  const { colorScheme, setColorScheme } = useColorScheme();
  const isDarkMode = colorScheme === "dark";

  const onThemeChange = async (themeName: string) => {
    const isExists = props.themes.hasOwnProperty(themeName);
    if (isExists) {
      setActiveTheme(themeName);
      await AsyncStorage.setItem("unative-theme-name", themeName);
    } else {
      setActiveTheme("default");
      await AsyncStorage.setItem("unative-theme-name", "default");
    }
  };

  const onColorSchemeChange = async (value: ColorSchemes) => {
    const schemes: ColorSchemes[] = ["light", "dark", "system"];
    if (schemes.includes(value)) {
      setActiveColorScheme(value);
      setColorScheme(value);
      await AsyncStorage.setItem("unative-theme-scheme", value);
      return;
    }

    console.error(`Invalid color scheme ${value}`);
  };

  useEffect(() => {
    const init = async () => {
      try {
        const savedThemeName = await AsyncStorage.getItem("unative-theme-name");
        await onThemeChange(savedThemeName || "default");

        const savedScheme = await AsyncStorage.getItem("unative-theme-scheme");
        await onColorSchemeChange((savedScheme || "system") as ColorSchemes);
      } catch (err) {
        console.error(err);
      } finally {
        setIsInitialized(true);
      }
    };
    init();
  }, []);

  const getCssVariables = useCallback(() => {
    return props.themes[activeTheme]?.[isDarkMode ? "dark" : "light"] || {};
  }, [isDarkMode, activeTheme]);

  return (
    <View
      className={[
        "flex-1",
        !!activeTheme && Platform.OS === "web" ? `theme-${activeTheme}` : "",
      ].join(" ")}
      id={`unp-native-${Platform.OS}`}
      style={vars(getCssVariables())}
    >
      <CommonProvider
        {...props}
        isDarkMode={isDarkMode}
        savedScheme={activeColorScheme}
        onColorSchemeChange={onColorSchemeChange}
        onThemeChange={onThemeChange}
        isParentInitialized={isInitialized}
        savedTheme={activeTheme}
        isWeb={Platform.OS === "web"}
      >
        <React.Fragment>{children}</React.Fragment>
      </CommonProvider>
    </View>
  );
};

// const ThemeHandler = ({ children }: { children: React.ReactNode }) => {
//   const { theme, isInitialized, cssVariables } = useTheme();

//   if (!isInitialized || !theme.name) return null;

//   const currentTheme =
//     cssVariables[theme.name][theme.scheme === "dark" ? "dark" : "light"];

//   useEffect(() => {
//     console.log("dev => theme.scheme", theme.scheme);
//   }, [theme.scheme]);

//   return <React.Fragment>{children}</React.Fragment>;
//   // return <View style={[{ flex: 1 }, vars(currentTheme)]}>{children}</View>;
// };
