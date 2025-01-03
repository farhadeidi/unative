import { useTheme } from "../../../core";
import { Box, Button, Text } from "../../core";

export type ThemeSwitchProps = {};
export const ThemeSwitch = ({}: ThemeSwitchProps) => {
  const { theme, themes, setScheme, colorSchemes, setTheme } = useTheme();

  return (
    <Box className="gap-4">
      <Box className="flex flex-row items-center gap-2">
        {colorSchemes.map((scheme) => {
          const isActive = theme.savedScheme === scheme;
          return (
            <Button
              variant={isActive ? "primary" : "outline"}
              key={scheme + theme.savedScheme}
              className="flex-1"
              onPress={() => {
                setScheme(scheme as "light" | "dark" | "system");
              }}
            >
              <Text>{scheme}</Text>
            </Button>
          );
        })}
      </Box>

      <Box className="flex flex-row items-center gap-2">
        {Object.keys(themes).map((themeName) => {
          const isActive = theme.name === themeName;
          return (
            <Button
              variant={isActive ? "primary" : "outline"}
              key={themeName}
              className="flex-1"
              onPress={() => {
                setTheme(themeName);
              }}
            >
              <Text>{themeName}</Text>
            </Button>
          );
        })}
      </Box>
    </Box>
  );
};
