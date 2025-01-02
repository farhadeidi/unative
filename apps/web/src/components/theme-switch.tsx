"use client";

import { useTheme } from "unative/core";
import { Button } from "unative/ui";

export type ThemeSwitchProps = {};
export const ThemeSwitch = ({}: ThemeSwitchProps) => {
  const { theme, setScheme, schemes } = useTheme();

  return (
    <div>
      {schemes.map((scheme) => {
        const isActive = theme.appliedScheme === scheme;
        return (
          <Button
            variant={isActive ? "primary" : "secondary"}
            key={scheme + theme.appliedScheme}
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
