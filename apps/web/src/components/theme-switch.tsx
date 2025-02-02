"use client";
import { MonitorIcon, MoonIcon, SunIcon } from "@unative/icons";
import { IconProps } from "@unative/icons/icon-options";
import React from "react";
import { useTheme } from "unative/hooks";
import { ColorSchemes } from "unative/types";
import { Box } from "unative/ui/box";
import { Button } from "unative/ui/button";

const schemes: {
  id: ColorSchemes;
  label: string;
  IconComponent: React.FC<IconProps>;
}[] = [
  {
    id: "system",
    label: "System",
    IconComponent: MonitorIcon,
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

export const ThemeSwitch = () => {
  const { themes, theme, isDarkMode, setTheme, setScheme, isInitialized } =
    useTheme();

  return (
    <Box className="flex flex-row gap-2">
      <Box className="flex flex-row items-center gap-2">
        {Object.keys(themes).map((themeName) => {
          const isActive = theme?.name === themeName;
          const activeTheme =
            themes?.[themeName]?.[isDarkMode ? "dark" : "light"];

          return (
            <Button
              variant="unstyled"
              size="icon"
              key={themeName}
              className="rounded-full"
              onClick={() => {
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
          const isActive = isInitialized && theme?.savedScheme === item.id;

          return (
            <Button
              size="icon"
              variant={isActive ? "default" : "outline"}
              key={item.id}
              onClick={() => {
                setScheme(item.id);
              }}
            >
              <item.IconComponent
                size={16}
                variant={isActive ? "bold" : "linear"}
              />
            </Button>
          );
        })}
      </Box>
    </Box>
  );
};
