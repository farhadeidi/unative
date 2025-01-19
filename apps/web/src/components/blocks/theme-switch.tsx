"use client";

import React from "react";
import { LucideProps, MonitorCogIcon, MoonIcon, SunIcon } from "lucide-react";
import { useTheme } from "@unative/theme/hooks";

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

export type ThemeSwitchProps = {};
export const ThemeSwitch = ({}: ThemeSwitchProps) => {
  const themeHook = useTheme();
  console.log("dev => themeHook", themeHook);

  // return null;
  return (
    <div className="flex flex-row gap-2">
      <div className="flex flex-row items-center gap-2">
        {Object.keys(themeHook?.themes).map((themeName) => {
          const isActive = themeHook?.theme?.name === themeName;
          const activeTheme =
            themeHook?.themes?.[themeName]?.[
              themeHook?.isDarkMode ? "dark" : "light"
            ];

          return (
            <button
              title="Switch theme"
              // variant="unstyled"
              // size="icon"
              key={themeName}
              className="rounded-full"
              onClick={() => {
                themeHook?.setTheme(themeName);
              }}
            >
              <div
                className="h-7 w-7 rounded-full border border-border bg-background"
                style={{
                  borderColor: isActive
                    ? activeTheme?.["--primary"]
                    : themeHook?.theme.values["--border"],
                  padding: isActive ? 4 : 8,
                }}
              >
                <div
                  className="h-full w-full rounded-full"
                  style={{
                    backgroundColor: activeTheme?.["--primary"],
                  }}
                />
              </div>
            </button>
          );
        })}
      </div>

      <div className="flex flex-row items-center gap-2">
        {schemes.map((item) => {
          const isActive = themeHook?.theme?.savedScheme === item.id;

          return (
            <button
              title="Switch theme"
              // size="icon"
              // variant={isActive ? "default" : "outline"}
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
            </button>
          );
        })}
      </div>
    </div>
  );
};
