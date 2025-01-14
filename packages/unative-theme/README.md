# Unative Theme

**<span style="color: red;">⚠️ Important: This project is still under development. Do not use this library in your projects. You can start using it once the first stable version is launched.</span>**

## Install

```sh
pnpm i @unative/theme
```

```js
// metro.config.js

// Learn more https://docs.expo.io/guides/customizing-metro
const { getDefaultConfig } = require("expo/metro-config");
const { withNativeWind } = require("nativewind/metro");
const { withUnative } = require("@unative/theme/with-unative");

/** @type {import('expo/metro-config').MetroConfig} */
const config = getDefaultConfig(__dirname);

module.exports = withUnative(
  withNativeWind(config, { input: "./global.css" }),
  {
    css: "./global.css",
    outputDir: "./src/lib/unative",
  },
);
```

```tsx
// app/_layout.tsx
import "../../global.css";

import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useTheme } from "@unative/theme";
import { Provider as UnativeProvider } from "@unative/theme/provider/native";

import { THEMES } from "@/lib/unative/themes";

const RootLayout = () => {
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
                card: themes[theme.name].dark["--background"],
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
                card: themes[theme.name].light["--background"],
                notification: themes[theme.name].light["--destructive"],
                primary: themes[theme.name].light["--primary"],
                text: themes[theme.name].light["--foreground"],
              },
            }
      }
    >
      <Stack />
    </ThemeProvider>
  );
};

export default RootLayout;
```
