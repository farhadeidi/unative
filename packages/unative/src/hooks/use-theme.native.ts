import { useContext } from "react";
import { ThemeContext } from "../theme/common/theme-context";

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }

  const { themes, rawThemes, rawThemeValues, theme } = context;

  return {
    theme,
    themes,
    rawThemes,
    rawThemeValues: rawThemeValues,
    navigationThemes: {
      light: {
        primary: `hsl(${rawThemes[theme.name]["light"]["--primary"]})`,
        background: `hsl(${rawThemes[theme.name]["light"]["--background"]})`,
        card: `hsl(${rawThemes[theme.name]["light"]["--background"]})`,
        text: `hsl(${rawThemes[theme.name]["light"]["--foreground"]})`,
        border: `hsl(${rawThemes[theme.name]["light"]["--border"]})`,
        notification: `hsl(${rawThemes[theme.name]["light"]["--destructive"]})`,
      },
      dark: {
        primary: `hsl(${rawThemes[theme.name]["dark"]["--primary"]})`,
        background: `hsl(${rawThemes[theme.name]["dark"]["--background"]})`,
        card: `hsl(${rawThemes[theme.name]["dark"]["--background"]})`,
        text: `hsl(${rawThemes[theme.name]["dark"]["--foreground"]})`,
        border: `hsl(${rawThemes[theme.name]["dark"]["--border"]})`,
        notification: `hsl(${rawThemes[theme.name]["dark"]["--destructive"]})`,
      },
    },
  };
};
