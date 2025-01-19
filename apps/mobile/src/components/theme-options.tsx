import { useTheme } from "@unative/theme";
import { Box, BoxProps, Button } from "unative";

import { cn } from "@/lib/utils";
import { MonitorCogIcon, MoonIcon, SunIcon } from "@/components/icons";

export type ThemeOptionsProps = BoxProps & {};
export const ThemeOptions = ({ className, ...props }: ThemeOptionsProps) => {
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
          variant="unstyled"
          size="icon"
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
          <Box className="h-12 w-12 items-center justify-center rounded-full border border-border bg-background">
            {savedColorScheme === "system" && (
              <MonitorCogIcon size={24} className="text-foreground" />
            )}
            {savedColorScheme === "dark" && (
              <MoonIcon size={24} className="text-foreground" />
            )}
            {savedColorScheme === "light" && (
              <SunIcon size={24} className="text-foreground" />
            )}
          </Box>
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
