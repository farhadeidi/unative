"use client";

import React from "react";
import type { LucideProps } from "lucide-react";
import { MonitorCogIcon, MoonIcon, SunIcon } from "lucide-react";
import { useTheme } from "unative/theme";
import { Box, Button } from "unative/ui";

const schemes: {
  id: "system" | "light" | "dark";
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

export type ThemeOptionsProps = {};
export const ThemeOptions = ({}: ThemeOptionsProps) => {
  const themeHook = useTheme();

  return (
    <Box className="flex flex-row gap-2">
      <Box className="flex flex-row items-center gap-2">
        {Object.keys(themeHook?.themes).map((themeName) => {
          const isActive = themeHook?.theme?.name === themeName;
          const activeTheme =
            themeHook?.themes?.[themeName]?.[
              themeHook?.isDarkMode ? "dark" : "light"
            ];

          return (
            <Button
              variant="unstyled"
              size="icon"
              key={themeName}
              className="rounded-full"
              onClick={() => {
                themeHook?.setTheme(themeName);
              }}
            >
              <Box
                className="h-7 w-7 rounded-full border border-border bg-background"
                style={{
                  borderColor: isActive
                    ? activeTheme?.["--primary"]
                    : themeHook?.theme.values["--border"],
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

      <div className="flex flex-row items-center gap-2">
        {schemes.map((item) => {
          const isActive = themeHook?.theme?.savedScheme === item.id;

          return (
            <Button
              size="icon"
              variant={isActive ? "default" : "outline"}
              key={item.id}
              onClick={() => {
                themeHook?.setScheme(item.id);
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
      </div>
    </Box>
  );
};
