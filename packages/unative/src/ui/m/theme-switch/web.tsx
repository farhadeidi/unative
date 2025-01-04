"use client";

import { useTheme } from "../../../core/hooks/use-theme";
import { ColorSchemes } from "../../../core/types";
import { Box, Button } from "../../elements/web";
import {
  IconProps,
  MoonIcon,
  SunIcon,
  SystemIcon,
} from "../../icons/icons-web";

const schemes: {
  id: ColorSchemes;
  label: string;
  IconComponent: React.FC<IconProps>;
}[] = [
  {
    id: "system",
    label: "System",
    IconComponent: SystemIcon,
  },
  {
    id: "light",
    label: "Light",
    IconComponent: SunIcon,
  },
  {
    id: "dark",
    label: "Dark",
    IconComponent: MoonIcon,
  },
];

export type ThemeSwitchProps = {};
export const ThemeSwitch = ({}: ThemeSwitchProps) => {
  const { theme, themes, setScheme, setTheme, isDarkMode } = useTheme();

  return (
    <Box className="flex flex-row gap-2">
      <Box className="flex flex-row items-center gap-2">
        {Object.keys(themes).map((themeName) => {
          const isActive = theme.name === themeName;
          const activeTheme = themes[themeName][isDarkMode ? "dark" : "light"];
          return (
            <Button
              variant="unstyled"
              size="icon"
              key={themeName}
              className="rounded-full"
              onPress={() => {
                setTheme(themeName);
              }}
            >
              <Box
                className="h-7 w-7 rounded-full border border-border bg-background"
                style={{
                  borderColor: isActive
                    ? activeTheme["--primary"]
                    : theme.values["--border"],
                  padding: isActive ? 4 : 8,
                }}
              >
                <Box
                  className="h-full w-full rounded-full"
                  style={{
                    backgroundColor: activeTheme["--primary"],
                  }}
                />
              </Box>
            </Button>
          );
        })}
      </Box>

      <Box className="flex flex-row items-center gap-2">
        {schemes.map((item) => {
          const isActive = theme.savedScheme === item.id;
          return (
            <Button
              size="icon"
              variant={isActive ? "primary" : "outline"}
              key={item.id}
              onPress={() => {
                setScheme(item.id);
              }}
            >
              <item.IconComponent
                size={16}
                className={
                  isActive ? "text-primary-foreground" : "text-foreground"
                }
              />
            </Button>
          );
        })}
      </Box>
    </Box>
  );
};
