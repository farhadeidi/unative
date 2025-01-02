import { useEffect, useState } from "react";
import { UnativeThemes } from "../../types";
import { DEFAULT_THEMES, ThemeState } from "../common";
import { themeUtils } from "./theme-utils";

const useProviderHandler = ({
  rawThemes,
  isDarkMode,
}: {
  rawThemes: UnativeThemes;
  isDarkMode: boolean;
}) => {
  const [isInitialized, setIsInitialized] = useState(false);
  const [themes, setThemes] = useState<UnativeThemes>({});
  const [theme, setTheme] = useState<ThemeState>({
    name: "default",
    scheme: isDarkMode ? "dark" : "light",
    values: DEFAULT_THEMES[isDarkMode ? "dark" : "light"],
  });

  useEffect(() => {
    const init = async () => {
      const { cssVars, optimizedThemes } = themeUtils.getOptimizedThemes({
        themes: rawThemes,
      });
      setThemes(optimizedThemes);
      setTheme({
        name: "default",
        scheme: isDarkMode ? "dark" : "light",
        values: optimizedThemes.default[isDarkMode ? "dark" : "light"],
      });
      setIsInitialized(true);
    };
    init();
  }, [rawThemes, isDarkMode]);

  return { isInitialized, themes, theme };
};

export default useProviderHandler;
