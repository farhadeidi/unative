"use client";

import { LucideProps, MonitorCogIcon, MoonIcon, SunIcon } from "lucide-react";
import { ColorSchemes, useTheme } from "@unative/theme";

import { Box } from "@/components/ui/box";
import { Button } from "@/components/ui/button";

const schemes: {
  id: ColorSchemes;
  label: string;
  IconComponent: React.FC<LucideProps>;
}[] = [
  {
    id: "system",
    label: "System",
    IconComponent: MonitorCogIcon,
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
          const activeTheme =
            themes[themeName]?.[isDarkMode ? "dark" : "light"];

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
                    ? activeTheme?.["--primary"]
                    : theme.values["--border"],
                  padding: isActive ? 4 : 8,
                }}
              >
                <Box
                  className="h-full w-full rounded-full"
                  style={{
                    backgroundColor: activeTheme?.["--primary"],
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
                suppressHydrationWarning
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
