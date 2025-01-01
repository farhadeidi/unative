import { useContext } from "react";
import { ThemeContext } from "../theme/common/theme-context";

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }

  const { theme, themes } = context;

  return { theme, themes };
};
