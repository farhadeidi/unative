import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";
import { Provider as UnativeProvider } from "unative/core/";
import "react-native-reanimated";
import "../../global.css";
import { Text, View } from "react-native";
import { THEMES } from "@/lib/unative/themes";
import { libraryEnvironment } from "unative";
import { useColorScheme } from "unative/hooks";

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
      {/* <DemoApp /> */}
      <App />
    </UnativeProvider>
  );
};

const DemoApp = () => {
  const { isDarkMode } = useColorScheme();
  return (
    <View>
      <Text>Hello {libraryEnvironment === "native" ? "Native" : "Web"}</Text>
    </View>
  );
};

const App = () => {
  const { isDarkMode } = useColorScheme();
  // const { navigationThemes } = useTheme();

  return (
    <ThemeProvider
      value={
        isDarkMode
          ? {
              ...DarkTheme,
              // colors: { ...DarkTheme.colors, ...navigationThemes?.dark },
            }
          : {
              ...DefaultTheme,
              // colors: { ...DefaultTheme.colors, ...navigationThemes?.light },
            }
      }
    >
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: true }} />
        <Stack.Screen name="+not-found" />
      </Stack>
      <StatusBar style="auto" />
    </ThemeProvider>
  );
};

export default RootLayout;
