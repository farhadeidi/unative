/** @jsxImportSource nativewind */

import { useTheme } from "unative/theme";
import { Box, BoxProps } from "unative/ui/box";
import { Button } from "unative/ui/button";
import { Text } from "unative/ui/text";

import { cn } from "unative/lib/utils";

export type ThemeSwitchProps = BoxProps & {};
export const ThemeSwitch = ({ className, ...props }: ThemeSwitchProps) => {
  const { themes, theme, setTheme, isDarkMode, setScheme, savedColorScheme } =
    useTheme();

  return (
    <Box
      className={cn(
        "bottom-safe-offset-4 left-safe-offset-2 right-safe-offset-2 absolute flex flex-row items-center rounded-full bg-black/50 p-2",
        className,
      )}
      {...props}
    >
      <Box className="flex flex-row items-center gap-2">
        <Button
          variant="outline"
          className="rounded-full"
          onPress={() => {
            switch (savedColorScheme) {
              case "system":
                setScheme("light");
                return;
              case "light":
                setScheme("dark");
                return;
              case "dark":
                setScheme("light");
                return;
              default:
                setScheme("system");
                return;
            }
          }}
        >
          {savedColorScheme === "system" && <Text>System</Text>}
          {savedColorScheme === "dark" && <Text>Dark</Text>}
          {savedColorScheme === "light" && <Text>Light</Text>}
        </Button>
      </Box>

      <Box className="flex flex-1 flex-row items-center justify-end gap-2">
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
                className="h-12 w-12 rounded-full border border-border bg-background"
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
    </Box>
  );
};
