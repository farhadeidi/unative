import { useEffect, useState } from "react";
import { ColorSchemes, UnativeThemes } from "../types";
import { DEFAULT_THEMES } from "../theme/common/default-themes";
import { ThemeState } from "./provider-context";
import { themeUtils } from "./theme-utils";

const useProviderHandler = ({
  rawThemes,
  isDarkMode,
  appliedScheme,
}: {
  rawThemes: UnativeThemes;
  isDarkMode: boolean;
  appliedScheme: ColorSchemes;
}) => {
  const [isInitialized, setIsInitialized] = useState(false);
  const [themes, setThemes] = useState<UnativeThemes>({});
  const [theme, setTheme] = useState<ThemeState>({
    name: "default",
    scheme: isDarkMode ? "dark" : "light",
    appliedScheme: appliedScheme,
    values: DEFAULT_THEMES[isDarkMode ? "dark" : "light"],
  });

  useEffect(() => {
    const init = async () => {
      const { optimizedThemes } = themeUtils.getOptimizedThemes({
        themes: rawThemes,
      });
      setThemes(optimizedThemes);
      setTheme({
        name: "default",
        scheme: isDarkMode ? "dark" : "light",
        appliedScheme: appliedScheme,
        values: optimizedThemes.default[isDarkMode ? "dark" : "light"],
      });
      setIsInitialized(true);
    };
    init();
  }, [rawThemes, isDarkMode, appliedScheme]);

  return {
    isInitialized,
    themes,
    theme,
    schemes: ["dark", "light", "system"] as ColorSchemes[],
  };
};

export default useProviderHandler;
