"use client";

import { useTheme } from "unative/core";
import { Button } from "unative/ui";

export type ThemeSwitchProps = {};
export const ThemeSwitch = ({}: ThemeSwitchProps) => {
  const { theme, setScheme, colorSchemes } = useTheme();

  return (
    <div>
      {colorSchemes.map((scheme) => {
        const isActive = theme.savedScheme === scheme;
        return (
          <Button
            variant={isActive ? "primary" : "secondary"}
            key={scheme + theme.savedScheme}
            onClick={() => {
              setScheme(scheme as "light" | "dark" | "system");
            }}
          >
            {scheme}
          </Button>
        );
      })}
    </div>
  );
};
