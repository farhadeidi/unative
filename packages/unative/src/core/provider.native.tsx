/** @jsxImportSource nativewind */

import React from "react";
import useProviderHandler from "./use-provider-handler";
import { ColorSchemes, UnativeConfig, UnativeThemes } from "../types";
import { ProviderContext } from "./provider-context";
import { View } from "react-native";
import { vars } from "nativewind";
import { useColorScheme } from "../hooks/use-color-scheme.native";

export type ProviderProps = {
  children?: React.ReactNode;
  themes: UnativeThemes;
  config?: UnativeConfig;
  defaultTheme?: string;
  onInitEnd?: () => void | Promise<void>;
};

export const Provider = ({ children, themes: rawThemes }: ProviderProps) => {
  const { isDarkMode, colorScheme, setColorScheme } = useColorScheme();
  console.log("dev => colorScheme", colorScheme);

  const { isInitialized, theme, themes } = useProviderHandler({
    rawThemes,
    isDarkMode,
    appliedScheme: colorScheme,
  });

  if (!isInitialized) {
    return null;
  }
  return (
    <ProviderContext.Provider
      value={{
        config: {},
        rawThemes: rawThemes,
        themes: themes,
        theme: theme,
        setScheme: (scheme) => {
          console.log("dev => scheme", scheme);

          setColorScheme(scheme);
        },
        setTheme: (value) => {},
        schemes: ["dark", "light", "system"] as ColorSchemes[],
        isInitialized,
      }}
    >
      <View
        style={[
          { flex: 1 },
          vars(rawThemes[theme.name][isDarkMode ? "dark" : "light"]),
        ]}
      >
        {children}
      </View>
    </ProviderContext.Provider>
  );
};
