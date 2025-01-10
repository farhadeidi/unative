import "../../global.css";
import "react-native-reanimated";

import { useEffect } from "react";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import { Platform } from "react-native";
import { useTheme } from "unative/core";
import { Provider as UnativeProvider } from "unative/core/provider/native";
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";

import { THEMES } from "@/lib/unative/themes";
import { Shell } from "@/components/shell";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

const RootLayout = () => {
  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <UnativeProvider themes={THEMES} defaultTheme="default">
      <App />
    </UnativeProvider>
  );
};

const App = () => {
  const { theme, themes, isDarkMode, isInitialized } = useTheme();
  if (!isInitialized) return null;

  return (
    <ThemeProvider
      value={
        isDarkMode
          ? {
              ...DarkTheme,
              colors: {
                ...DarkTheme.colors,
                background: themes[theme.name].dark["--background"],
                border: themes[theme.name].dark["--border"],
                card: themes[theme.name].dark["--card"],
                notification: themes[theme.name].dark["--destructive"],
                primary: themes[theme.name].dark["--primary"],
                text: themes[theme.name].dark["--foreground"],
              },
            }
          : {
              ...DefaultTheme,
              colors: {
                ...DefaultTheme.colors,
                background: themes[theme.name].light["--background"],
                border: themes[theme.name].light["--border"],
                card: themes[theme.name].light["--card"],
                notification: themes[theme.name].light["--destructive"],
                primary: themes[theme.name].light["--primary"],
                text: themes[theme.name].light["--foreground"],
              },
            }
      }
    >
      <Shell>
        <Stack screenOptions={{ headerShown: Platform.OS !== "web" }}>
          <Stack.Screen name="index" options={{ title: "Unative" }} />
          <Stack.Screen name="+not-found" />
        </Stack>
        <StatusBar style="auto" />
      </Shell>
    </ThemeProvider>
  );
};

export default RootLayout;
