# Unative: One UI Library for Web and Mobile

**<span style="color: red;">⚠️ Important: This project is still under development. Do not use this library in your production projects. You can start using it once the first stable version is launched.</span>**

## Table of Contents

- [What is Unative?](#what-is-unative)
- [The Story Behind](#the-story-behind)
- [Learn once, Use everywhere](#learn-once-use-everywhere)
- [Optimized for Both Platforms](#optimized-for-both-platforms)
- [ToDo's](#todos)
  - [Infrastructure](#infrastructure)
  - [Core Elements](#core-elements)
  - [Components](#components)
  - [Forms & Inputs](#forms--inputs)
  - [Blocks](#blocks)
- [Installation](#installation)
  - [Installation Guide for Mobile](#installation-guide-for-mobile)
    - [1. Create Your App with Expo](#1-create-your-app-with-expo)
    - [2. Add NativeWind](#2-add-nativewind)
    - [3. Install Unative](#3-install-unative)
    - [Peer Dependencies](#peer-dependencies)
    - [Metro](#metro)
    - [Tailwind Config](#tailwind-config)
  - [Installation Guide for NextJS](#installation-guide-for-nextjs)
    - [Step 1: Set Up TailwindCSS](#step-1-set-up-tailwindcss)
    - [Step 2: Install Unative](#step-2-install-unative)
    - [Step 3: Tailwind Configuration](#step-3-tailwind-configuration)
- [Your first component](#your-first-component)
- [Contributing](#contributing)
  - [How to Contribute](#how-to-contribute)
  - [Code of Conduct](#code-of-conduct)
- [License](#license)

## Introduction

### What is Unative?

Unative makes it easy to create great-looking and consistent user interfaces for both React Native and web apps. Powered by Tailwind CSS and Nativewind, it gives you a fast and simple way to handle styling across platforms. With full support for React Server Components, Unative helps you use modern tools to build amazing projects effortlessly.

### The Story Behind

As someone who has been working as a Frontend Developer for years, I’ve always noticed a significant gap between UI libraries for web and mobile. I needed a UI library that was fully optimized for both platforms—a library that I could use seamlessly on the web (without requiring any extra layers like `react-native-web`) and on mobile without being restricted by React Native’s limitations for web elements.

Most importantly, I wanted something that could stay in sync across all my projects, ensuring consistency and efficiency in my workflow.

### Learn once, Use everywhere

The **Unative** UI Library is inspired by ShadCN, with additional support from [RNR](https://github.com/mrzachnugent/react-native-reusables) and **RN-Primitives**. It is designed to work seamlessly across both web and mobile platforms, offering a truly native experience.

**Unative does not require react-native-web in nextjs or other web frameworks.** No components from React Native will be loaded in your web projects, even when using frameworks like Next.js, Vite, or any other React-based framework. This means you get an optimized, fully native experience for web and mobile without relying on compatibility layers or workarounds.

Whether you're building a mobile app or a web project, Unative provides a single, unified library that ensures consistency, performance, and simplicity across platforms.

```tsx
// The only file you need
// Nextjs, React Native, React Native Web, Expo and ...

import { cn } from "unative/lib/utils";
import type { BoxProps } from "unative/ui/box";
import { Box } from "unative/ui/box";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "unative/ui/card";
import { Text } from "unative/ui/text";

export type MyCardProps = BoxProps & {
  title: string;
  description?: string;
  content: string;
};

export const MyCard = ({
  title,
  content,
  className,
  ...props
}: MyCardProps) => {
  return (
    <Card className={cn("flex", className)} {...props}>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>My Description</CardDescription>
      </CardHeader>
      <CardContent>
        <Box>
          <Text>{content}</Text>
        </Box>
      </CardContent>
    </Card>
  );
};
```

## Optimized for Both Platforms

Unative is fully optimized for both web and mobile platforms. Everything is loaded in a completely treeshakeable way. For example, if you only use the `Box` component on the web, the size of the import is as minimal as importing a simple `<div>`. On React Native, it’s equivalent to importing a `View` from `react-native`.

All components are processed individually, ensuring maximum efficiency. Each core component consists of two main files:

- **web**: Includes all dependencies required for running on the web, powered by [Radix Primitives](https://www.radix-ui.com/).
- **native**: Includes all dependencies for running on React Native and React Native Web.

This modular approach ensures that your projects remain lightweight and optimized, regardless of the platform you’re building for.

## ToDo's

### Infrastructure

- [x] Theming
- [x] Separate native and web files with same folder structure
- [x] Auto generate css theme variables by adding HOC to metro.config.js and next.config.js

### Core Elements

- [x] Box
- [x] Text
- [x] Button
- [x] Typography
- [x] Separator
- [x] Avatar
- [x] Badge
- [x] Card

### Components

- [x] Accordion
- [x] Alert
- [x] Alert Dialog
- [x] Aspect Ratio
- [x] Avatar
- [x] Badge
- [x] Box
- [x] Button
- [x] Card
- [x] Checkbox
- [x] Collapsible
- [x] Context Menu
- [x] Dialog
- [x] Dropdown Menu
- [x] Hover Card
- [x] Menu Bar
- [x] Navigation Menu
- [x] Popover
- [x] Progress
- [x] Separator
- [x] Skeleton
- [x] Table
- [x] Tabs
- [x] Text
- [x] Toggle
- [x] Toggle Group
- [x] Tooltip
- [x] Typography
- [ ] ActionSheet
- [ ] Toast
- [ ] BottomSheet

### Forms & Inputs

- [ ] Form
- [x] Label
- [x] TextInput
- [x] TextArea
- [x] Checkbox
- [x] Radio Group
- [ ] Date Input
- [x] Select
- [ ] Select Async
- [ ] OTP Input
- [x] Switch
- [ ] SegmentedControl

### Blocks

- [ ] Theme Switch
- [ ] Auth (Login/Register)
- [ ] Onboarding
- [ ] Calendar

## Installation

### Installation Guide for Mobile

#### 1. Create Your App with Expo

Start by creating your mobile app using [Expo](https://docs.expo.dev/).

```sh
npx create-expo-app my-app
```

#### 2. Add NativeWind

Install [NativeWind](https://www.nativewind.dev/) and ensure it works correctly in your project.

```sh
pnpm i nativewind
```

Follow the setup guide in the [NativeWind documentation](https://www.nativewind.dev/quick-starts/expo).

#### 3. Install Unative

Finally, add the Unative library to your project:

```sh
npx expo install unative
```

#### Peer Dependencies

```sh
npx expo install clsx tailwind-merge class-variance-authority @react-native-async-storage/async-storage react-native-reanimated react-native-safe-area-context
```

#### Metro

```js
// metro.config.js
// Learn more https://docs.expo.io/guides/customizing-metro
const { getDefaultConfig } = require("expo/metro-config");
const { withNativeWind } = require("nativewind/metro");
const { withUnative } = require("unative/with-unative");

/** @type {import('expo/metro-config').MetroConfig} */
const config = getDefaultConfig(__dirname);

module.exports = withUnative(
  withNativeWind(config, { input: "./global.css" }),
  {
    css: "./global.css",
    outputDir: "./src/lib/unative",
  }
);
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

### Installation Guide for NextJS

#### Step 1: Set Up TailwindCSS

Make sure TailwindCSS is installed and configured in your Next.js project. If you haven’t done this yet, follow the [official TailwindCSS installation guide for Next.js](https://tailwindcss.com/docs/guides/nextjs).

```sh
pnpm i tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

#### 2. Install Unative

```sh
pnpm i unative
```

```sh
pnpm i clsx tailwind-merge class-variance-authority next-themes lucide-react
```

#### 3. Tailwind Configuration

```js
// tailwind.config.ts
import type { Config } from "tailwindcss";

export default {
  darkMode: "class",
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/unative/**/*.{js,jsx,ts,tsx}",
    "./node_modules/@unative/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      borderRadius: {
        none: "0",
        DEFAULT: "var(--radius)",
        button: "var(--radius-button)",
        card: "var(--radius-card)",
      },
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
        chart: {
          1: "hsl(var(--chart-1))",
          2: "hsl(var(--chart-2))",
          3: "hsl(var(--chart-3))",
          4: "hsl(var(--chart-4))",
          5: "hsl(var(--chart-5))",
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
      },
    },
  },
  plugins: [],
} satisfies Config;

```

## Your first component

```tsx
import { cn } from "unative/lib/utils";
import type { BoxProps } from "unative/ui/box";
import { Box } from "unative/ui/box";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "unative/ui/card";
import { Text } from "unative/ui/text";

export type MyCardProps = BoxProps & {
  title: string;
  description?: string;
  content: string;
};

export const MyCard = ({
  title,
  content,
  className,
  ...props
}: MyCardProps) => {
  return (
    <Card className={cn("flex", className)} {...props}>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>My Description</CardDescription>
      </CardHeader>
      <CardContent>
        <Box>
          <Text>{content}</Text>
        </Box>
      </CardContent>
    </Card>
  );
};
```

## Theming

### Config HOC

#### NextJS

```ts
// next.config.ts

import type { NextConfig } from "next";
import { withUnative } from "unative/theme/with-unative";

const nextConfig: NextConfig = {
  transpilePackages: ["unative"],
};

export default withUnative(nextConfig, {
  css: "./src/app/globals.css",
  outputDir: "./src/lib/unative",
});
```

#### Metro

```js
// metro.config.js

// Learn more https://docs.expo.io/guides/customizing-metro
const { getDefaultConfig } = require("expo/metro-config");
const { withNativeWind } = require("nativewind/metro");
const { withUnative } = require("unative/theme/with-unative");

/** @type {import('expo/metro-config').MetroConfig} */
const config = getDefaultConfig(__dirname);

module.exports = withUnative(
  withNativeWind(config, { input: "./global.css" }),
  {
    css: "./global.css",
    outputDir: "./src/lib/unative",
  }
);
```

### Provider

```tsx
import { Provider as UnativeProvider } from "unative/theme/provider";
import { THEMES } from "@/lib/unative/themes"; // Configured in metro.config.js or next.config.ts

<UnativeProvider themes={THEMES}>{children}</UnativeProvider>;
```

### useTheme hook

```tsx
import { useTheme } from "unative/theme";

const App = () => {
  const {
    themes, // All Installed Themes
    theme, // Current Theme
    isDarkMode,
    setTheme, // Set theme by theme-name
    setScheme, // Set Scheme => dark | light | system
    colorScheme, // dark | light
    colorSchemes, // [dark, light, system]
    isInitialized,
    rawThemes, // Raw css theme values - Not optimized for react native
    savedColorScheme, // system | light | dark
    rawThemeValues,
  } = useTheme();

  return null;
};
```

### Base CSS variables

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  :root {
    --background: 0 0% 100%;
    --foreground: 0 0% 0%;
    --card: 0 0% 100%;
    --card-foreground: 0 0% 0%;
    --popover: 0 0% 100%;
    --popover-foreground: 0 0% 0%;
    --primary: 220 80% 50%;
    --primary-foreground: 0 0% 100%;
    --secondary: 0 0% 0%;
    --secondary-foreground: 0 0% 100%;
    --muted: 0 0% 90%;
    --muted-foreground: 0 0% 30%;
    --accent: 220 80% 90%;
    --accent-foreground: 222.2 47.4% 11.2%;
    --destructive: 0 80% 60%;
    --destructive-foreground: 0 0% 100%;
    --border: 0 0% 90%;
    --input: 214.3 31.8% 91.4%;
    --ring: 221.2 83.2% 53.3%;

    --radius: 0.5rem;
    --radius-lg: 2rem;
    --radius-button: 6px;
    --radius-card: 6px;

    --positive: 142 60% 40%;
    --positive-foreground: 0 0% 100%;
    --warning: 40 100% 50%;
    --warning-foreground: 39.6 100% 50.2%;
    --link: 216 100% 60%;
  }

  .dark {
    --background: 0 0% 0%;
    --foreground: 0 0% 100%;
    --card: 0 0% 9.02%;
    --card-foreground: 0 0% 100%;
    --popover: 222.2 84% 4.9%;
    --popover-foreground: 0 0% 100%;
    --primary: 217.2 91.2% 59.8%;
    --primary-foreground: 0 0% 100%;
    --secondary: 217.2 32.6% 17.5%;
    --secondary-foreground: 0 0% 100%;
    --muted: 217.2 32.6% 17.5%;
    --muted-foreground: 215 20.2% 65.1%;
    --accent: 217.2 32.6% 17.5%;
    --accent-foreground: 0 0% 100%;
    --destructive: 0 72% 51%;
    --destructive-foreground: 0 0% 100%;
    --border: 0 0% 15%;
    --input: 217.2 32.6% 17.5%;
    --ring: 224.3 76.3% 48%;
    --radius: 3rem;
    --positive: 142 72% 29%;
    --positive-foreground: 0 0% 100%;
    --warning: 39.6 100% 50.2%;
    --warning-foreground: 39.6 100% 50.2%;
    --link: 216.89 100% 59.61%;
  }
}

.theme-brown {
  --background: 31 57% 93%;
  --primary: 30 100% 50%;
  --primary-foreground: 0 0% 100%;
  --card: 31 57% 85%;
  --accent: 30 100% 80%;
  --radius: 0.5rem;
  --radius-lg: 2rem;
  --radius-button: 24px;
  --radius-card: 0.5rem;

  &.dark {
    --background: 0 0% 0%;
    --primary: 30 100% 50%;
    --primary-foreground: 0 0% 100%;
    --card: 31 57% 8%;
    --accent: 30 100% 30%;
  }
}

.theme-third {
  --background: 0 0% 100%;
  --primary: 16 65% 40%;
  --primary-foreground: 0 0% 100%;
  &.dark {
    --background: 0 0% 0%;
    --primary: 16 65% 40%;
    --primary-foreground: 0 0% 100%;
  }
}

@layer base {
  * {
    @apply border-border;
  }
  body {
    @apply bg-background font-sans text-foreground antialiased;
  }
}
```

## Contributing

We’re excited to have you contribute to **Unative**! Contributions help make this library better for everyone. Whether you’re fixing bugs, improving documentation, or adding new features, we’d love to collaborate with you.

### How to Contribute

1. Fork the repository and clone it locally.
2. Install the dependencies using `pnpm`:
   ```sh
   pnpm install
   ```
3. Create a new branch for your changes:
   ```sh
   git checkout -b feature/my-awesome-feature
   ```
4. Make your changes and test them thoroughly.
5. Commit your changes with a meaningful commit message:
   ```sh
   git commit -m "Add: My awesome feature"
   ```
6. Push your branch:
   ```sh
   git push origin feature/my-awesome-feature
   ```
7. Open a Pull Request and describe your changes in detail.

### Code of Conduct

By contributing, you agree to abide by our [Code of Conduct](https://github.com/your-repo/code-of-conduct).

---

## License

**Unative** is licensed under the [MIT License](https://opensource.org/licenses/MIT). Feel free to use, modify, and distribute the library as per the terms of the license.
