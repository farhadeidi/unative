/** @jsxImportSource nativewind */

import { ColorSchemes, useTheme } from "unative/theme";
import { Box } from "unative/ui/box";
import { Label } from "unative/ui/label";
import { SegmentedControl } from "unative/ui/segmented-control";

export const ThemeSwitchWithSegmentedControl = () => {
  const { themes, theme, setTheme, setScheme, savedColorScheme } = useTheme();

  return (
    <Box className="flex flex-col gap-4">
      <Box className="gap-1">
        <Label>Color Scheme</Label>
        <SegmentedControl
          items={[
            { label: "Light", value: "light" },
            { label: "Dark", value: "dark" },
            { label: "System", value: "system" },
          ]}
          value={savedColorScheme}
          onChange={(value) => {
            setScheme(value as ColorSchemes);
          }}
        />
      </Box>

      <Box className="gap-1">
        <Label>Theme</Label>
        <SegmentedControl
          items={Object.keys(themes).map((el) => ({ label: el, value: el }))}
          value={theme.name}
          onChange={(value) => {
            setTheme(value);
          }}
        />
      </Box>
    </Box>
  );
};
