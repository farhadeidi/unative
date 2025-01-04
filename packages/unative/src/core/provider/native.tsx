/** @jsxImportSource nativewind */

import React, { useEffect, useState } from "react";
import { useColorScheme, vars } from "nativewind";
import { Platform, View } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { cn } from "../../utils";
import { useTheme } from "../hooks/use-theme";
import { ColorSchemes, ProviderProps } from "../types";

import { CommonProvider } from "./common";

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

  return (
    <View
      className={cn(
        "flex-1",
        !!activeTheme && Platform.OS === "web" ? `theme-${activeTheme}` : "",
      )}
    >
      <CommonProvider
        {...props}
        isDarkMode={isDarkMode}
        savedScheme={activeColorScheme}
        onColorSchemeChange={onColorSchemeChange}
        onThemeChange={onThemeChange}
        isParentInitialized={isInitialized}
        savedTheme={activeTheme}
      >
        <ThemeHandler>{children}</ThemeHandler>
      </CommonProvider>
    </View>
  );
};

const ThemeHandler = ({ children }: { children: React.ReactNode }) => {
  const { theme, rawThemes, isInitialized } = useTheme();

  if (!isInitialized || !theme.name) return null;

  return (
    <View
      style={[
        { flex: 1 },
        vars(rawThemes[theme.name][theme.scheme === "dark" ? "dark" : "light"]),
      ]}
      className=""
    >
      {children}
    </View>
  );
};
