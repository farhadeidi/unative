# Unative: One UI Library for Web and Mobile

**Note:** This library is currently under development and is not recommended for use in production environments.

## The Story Behind

Unative makes it easy to create great-looking and consistent user interfaces for both React Native and web apps. Powered by Tailwind CSS and Nativewind, it gives you a fast and simple way to handle styling across platforms. With full support for React Server Components, Unative helps you use modern tools to build amazing projects effortlessly.

# Installation Guide for Mobile

### 1. Create Your App with Expo

Start by creating your mobile app using [Expo](https://docs.expo.dev/).

```sh
npx create-expo-app my-app
```

### 2. Add NativeWind

Install [NativeWind](https://www.nativewind.dev/) and ensure it works correctly in your project.

```sh
pnpm i nativewind
```

Follow the setup guide in the [NativeWind documentation](https://www.nativewind.dev/quick-starts/expo).

### 3. Install Unative

Finally, add the Unative library to your project:

```sh
pnpm i unative
```

OR

```sh
npx expo install unative
```

#### Peer Dependencies

```sh
npx expo install clsx tailwind-merge class-variance-authority @react-native-async-storage/async-storage
```

#### tsconfig.json

```json
{
  "compilerOptions": {
    "moduleSuffixes": [".native", ""],
    "customConditions": ["react-native"]
  }
}
```

#### Metro

```js
// metro.config.js
const { getDefaultConfig } = require("expo/metro-config");
const { withNativeWind } = require("nativewind/metro");
const { withUnative } = require("unative/native/metro");

/** @type {import('expo/metro-config').MetroConfig} */
const config = getDefaultConfig(__dirname);
config.resolver.unstable_enablePackageExports = true;

module.exports = withUnative(withNativeWind(config, { input: "./global.css" }));
```

#### Unative Config

```ts
// unative.config.ts
import type { UnativeConfig } from "unative/types";

const config: UnativeConfig = {
  cssFilePath: "./global.css",
  outputDir: "src/lib/unative",
};

export default config;
```

#### Tailwind Config

```js
// tailwind.config.js

/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/unative/**/*.{js,jsx,mjs,ts,tsx}",
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        positive: {
          DEFAULT: "hsl(var(--positive))",
          foreground: "hsl(var(--positive-foreground))",
        },
        warning: {
          DEFAULT: "hsl(var(--warning))",
          foreground: "hsl(var(--warning-foreground))",
        },
        link: "hsl(var(--link))",
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
      },
    },
  },
  plugins: [],
};
```
