import { useContext } from "react";
import { ProviderContext } from "./provider-context";

export const useTheme = () => {
  const context = useContext(ProviderContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }

  const { theme, themes } = context;
  return {
    theme,
    themes,
    setTheme: context.setTheme,
    setScheme: context.setScheme,
    schemes: context.schemes,
    isInitialized: context.isInitialized,
  };
};
