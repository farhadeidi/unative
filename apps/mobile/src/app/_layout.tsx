import "../../global.css";
import "react-native-reanimated";

import React, { useEffect } from "react";
import { FontSource, useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import { Platform } from "react-native";
import { PortalHost } from "unative";
import { useTheme } from "unative/theme";
import { Provider as UnativeProvider } from "unative/theme/provider/native";
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { api } from "@repo/shared-api";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { THEMES } from "@/lib/unative/themes";
import { Shell } from "@/components/shell";

const queryClient = new QueryClient();

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

api.tmdb.client.interceptors.request.use((request) => {
  request.headers.set(
    "Authorization",
    `Bearer ${process.env.EXPO_PUBLIC_TMDB_API_KEY}`,
  );
  return request;
});

const RootLayout = () => {
  const [loaded] = useFonts(
    Platform.select({
      web: {
        InterVariable: require("@/assets/fonts/Inter/Inter-VariableFont_opsz,wght.ttf"),
        InterVariableItalic: require("@/assets/fonts/Inter/Inter-Italic-VariableFont_opsz,wght.ttf"),
      },

      default: {
        SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),

        InterVariable: require("@/assets/fonts/Inter/Inter-VariableFont_opsz,wght.ttf"),
        InterVariableItalic: require("@/assets/fonts/Inter/Inter-Italic-VariableFont_opsz,wght.ttf"),

        "Inter-Thin": require("@/assets/fonts/Inter/static/Inter_18pt-Thin.ttf"),
        "Inter-ThinItalic": require("@/assets/fonts/Inter/static/Inter_18pt-ThinItalic.ttf"),

        "Inter-ExtraLight": require("@/assets/fonts/Inter/static/Inter_18pt-ExtraLight.ttf"),
        "Inter-ExtraLightItalic": require("@/assets/fonts/Inter/static/Inter_18pt-ExtraLightItalic.ttf"),

        "Inter-Light": require("@/assets/fonts/Inter/static/Inter_18pt-Light.ttf"),
        "Inter-LightItalic": require("@/assets/fonts/Inter/static/Inter_18pt-LightItalic.ttf"),

        Inter: require("@/assets/fonts/Inter/static/Inter_18pt-Regular.ttf"),
        "Inter-Regular": require("@/assets/fonts/Inter/static/Inter_18pt-Regular.ttf"),
        "Inter-RegularItalic": require("@/assets/fonts/Inter/static/Inter_18pt-Italic.ttf"),

        "Inter-Medium": require("@/assets/fonts/Inter/static/Inter_18pt-Medium.ttf"),
        "Inter-MediumItalic": require("@/assets/fonts/Inter/static/Inter_18pt-MediumItalic.ttf"),

        "Inter-SemiBold": require("@/assets/fonts/Inter/static/Inter_18pt-SemiBold.ttf"),
        "Inter-SemiBoldItalic": require("@/assets/fonts/Inter/static/Inter_18pt-SemiBoldItalic.ttf"),

        "Inter-Bold": require("@/assets/fonts/Inter/static/Inter_18pt-Bold.ttf"),
        "Inter-BoldItalic": require("@/assets/fonts/Inter/static/Inter_18pt-BoldItalic.ttf"),

        "Inter-ExtraBold": require("@/assets/fonts/Inter/static/Inter_18pt-ExtraBold.ttf"),
        "Inter-ExtraBoldItalic": require("@/assets/fonts/Inter/static/Inter_18pt-ExtraBoldItalic.ttf"),

        "Inter-Black": require("@/assets/fonts/Inter/static/Inter_18pt-Black.ttf"),
        "Inter-BlackItalic": require("@/assets/fonts//Inter/static/Inter_18pt-BlackItalic.ttf"),
      },
    }) as Record<string, FontSource>,
  );

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <QueryClientProvider client={queryClient}>
      <UnativeProvider themes={THEMES} defaultTheme="default">
        <App />
        <PortalHost />
      </UnativeProvider>
    </QueryClientProvider>
  );
};

const navigationFonts: (typeof DefaultTheme)["fonts"] = {
  bold: {
    fontFamily: "Inter-Bold",
    fontWeight: "bold",
  },
  heavy: {
    fontFamily: "Inter-Black",
    fontWeight: "800",
  },
  regular: {
    fontFamily: "Inter-Regular",
    fontWeight: "400",
  },
  medium: {
    fontFamily: "Inter-Medium",
    fontWeight: "500",
  },
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
                card: themes[theme.name].dark["--background"],
                notification: themes[theme.name].dark["--destructive"],
                primary: themes[theme.name].dark["--primary"],
                text: themes[theme.name].dark["--foreground"],
              },
              fonts: {
                ...DarkTheme.fonts,
                ...navigationFonts,
              },
            }
          : {
              ...DefaultTheme,
              colors: {
                ...DefaultTheme.colors,
                background: themes[theme.name].light["--background"],
                border: themes[theme.name].light["--border"],
                card: themes[theme.name].light["--background"],
                notification: themes[theme.name].light["--destructive"],
                primary: themes[theme.name].light["--primary"],
                text: themes[theme.name].light["--foreground"],
              },
              fonts: {
                ...DefaultTheme.fonts,
                ...navigationFonts,
              },
            }
      }
    >
      <Shell>
        <Stack
          screenOptions={{
            headerShown: Platform.OS !== "web",
            headerShadowVisible: false,
            headerTitleAlign: "center",
          }}
        >
          <Stack.Screen
            name="index"
            options={{
              title: "Home",
            }}
          />
          <Stack.Screen name="+not-found" />
        </Stack>
        <StatusBar style="auto" />
      </Shell>
    </ThemeProvider>
  );
};

export default RootLayout;
