import { useContext } from "react";
import { ThemeContext } from "../theme/common/theme-context";
import { useTheme as useNextTheme } from "next-themes";

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }

  const { setTheme: setNextTheme } = useNextTheme();

  const setTheme = (value: "light" | "dark" | "system") => {
    setNextTheme(value);
  };
  const { theme, themes } = context;
  return { theme, themes, setTheme };
};
