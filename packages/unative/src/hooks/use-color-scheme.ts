import { useColorScheme as useTailwindColorScheme } from "nativewind";

export const useColorScheme = () => {
  const { colorScheme, setColorScheme, toggleColorScheme } =
    useTailwindColorScheme();

  return {
    colorScheme,
    isDarkMode: colorScheme === "dark",
    setColorScheme,
    toggleColorScheme,
  };
};
