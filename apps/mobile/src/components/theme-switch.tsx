import { useTheme } from "unative/core";
import { Box, Button, Text } from "unative/ui";

export type ThemeSwitchProps = {};
export const ThemeSwitch = ({}: ThemeSwitchProps) => {
  const { theme, setScheme, schemes } = useTheme();

  return (
    <Box>
      {schemes.map((scheme) => {
        const isActive = theme.appliedScheme === scheme;
        return (
          <Button
            variant={isActive ? "primary" : "secondary"}
            key={scheme + theme.appliedScheme}
            onPress={() => {
              setScheme(scheme as "light" | "dark" | "system");
            }}
          >
            <Text>{scheme}</Text>
          </Button>
        );
      })}
    </Box>
  );
};
