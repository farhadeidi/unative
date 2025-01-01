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
import { DEFAULT_THEMES, useColorScheme, useTheme, isWeb } from "unative";
import { Provider as UnativeProvider } from "unative/theme/native";
import "react-native-reanimated";
import "../../global.css";
import { Text, View } from "react-native";

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
    <UnativeProvider
      themes={{ default: DEFAULT_THEMES }}
      defaultTheme="default"
    >
      {/* <DemoApp /> */}
      <App />
    </UnativeProvider>
  );
};

const DemoApp = () => {
  const { isDarkMode } = useColorScheme();
  return (
    <View>
      <Text>Hello {isWeb ? "Web" : "Native"}</Text>
    </View>
  );
};

const App = () => {
  const { isDarkMode } = useColorScheme();
  const { navigationThemes } = useTheme();

  return (
    <ThemeProvider
      value={
        isDarkMode
          ? {
              ...DarkTheme,
              colors: { ...DarkTheme.colors, ...navigationThemes?.dark },
            }
          : {
              ...DefaultTheme,
              colors: { ...DefaultTheme.colors, ...navigationThemes?.light },
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
