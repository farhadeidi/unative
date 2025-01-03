"use client";

import { ColorSchemes } from "../../../core/types";
import { useTheme } from "../../../core/use-theme";
import { Box, Button, Text } from "../../core/index.web";

const schemes: { id: ColorSchemes; label: string; icon: JSX.Element }[] = [
  {
    id: "system",
    label: "System",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="19" cy="6" r="3" />
        <path d="M22 12v3a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h9" />
        <path d="M12 17v4" />
        <path d="M8 21h8" />
      </svg>
    ),
  },
  {
    id: "light",
    label: "Light",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2v2" />
        <path d="M12 20v2" />
        <path d="m4.93 4.93 1.41 1.41" />
        <path d="m17.66 17.66 1.41 1.41" />
        <path d="M2 12h2" />
        <path d="M20 12h2" />
        <path d="m6.34 17.66-1.41 1.41" />
        <path d="m19.07 4.93-1.41 1.41" />
      </svg>
    ),
  },
  {
    id: "dark",
    label: "Dark",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="lucide lucide-moon"
      >
        <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
      </svg>
    ),
  },
];
export type ThemeSwitchProps = {};
export const ThemeSwitch = ({}: ThemeSwitchProps) => {
  const { theme, themes, setScheme, setTheme, isDarkMode } = useTheme();

  return (
    <Box className="gap-2 flex flex-row">
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
                className="w-7 h-7 bg-background border border-border rounded-full"
                style={{
                  borderColor: isActive
                    ? activeTheme["--primary"]
                    : theme.values["--border"],
                  padding: isActive ? 4 : 8,
                }}
              >
                <Box
                  className="w-full h-full rounded-full"
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
              {item.icon}
            </Button>
          );
        })}
      </Box>
    </Box>
  );
};
