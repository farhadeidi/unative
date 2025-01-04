/* eslint-disable prettier/prettier */
import type { UnativeThemeVariables, UnativeThemes } from "unative/core";

/*
** Auto generated code. Don't modify manually.
** This file is generated by theme-colors-extractor.ts.
** It provides a map of theme colors for different schemes.
*/

export const DEFAULT_THEME_LIGHT: UnativeThemeVariables = {
  "--background": "0 0% 100%",
  "--foreground": "222.2 84% 4.9%",
  "--card": "0 0% 100%",
  "--card-foreground": "222.2 84% 4.9%",
  "--popover": "0 0% 100%",
  "--popover-foreground": "222.2 84% 4.9%",
  "--primary": "221.2 83.2% 53.3%",
  "--primary-foreground": "0 0% 100%",
  "--secondary": "210 40% 96.1%",
  "--secondary-foreground": "222.2 47.4% 11.2%",
  "--muted": "210 40% 96.1%",
  "--muted-foreground": "215.4 16.3% 46.9%",
  "--accent": "210 40% 96.1%",
  "--accent-foreground": "222.2 47.4% 11.2%",
  "--destructive": "0 84% 60%",
  "--destructive-foreground": "0 0% 100%",
  "--border": "214.3 31.8% 91.4%",
  "--input": "214.3 31.8% 91.4%",
  "--ring": "221.2 83.2% 53.3%",
  "--radius": "1rem",
  "--positive": "142 72% 29%",
  "--positive-foreground": "0 0% 100%",
  "--warning": "39.6 100% 50.2%",
  "--warning-foreground": "39.6 100% 50.2%",
  "--link": "216.89 100% 59.61%"
};

export const DEFAULT_THEME_DARK: UnativeThemeVariables = {
  "--background": "0 0% 0%",
  "--foreground": "0 0% 100%",
  "--card": "0 0% 9.02%",
  "--card-foreground": "0 0% 100%",
  "--popover": "222.2 84% 4.9%",
  "--popover-foreground": "0 0% 100%",
  "--primary": "217.2 91.2% 59.8%",
  "--primary-foreground": "0 0% 100%",
  "--secondary": "217.2 32.6% 17.5%",
  "--secondary-foreground": "0 0% 100%",
  "--muted": "217.2 32.6% 17.5%",
  "--muted-foreground": "215 20.2% 65.1%",
  "--accent": "217.2 32.6% 17.5%",
  "--accent-foreground": "0 0% 100%",
  "--destructive": "0 72% 51%",
  "--destructive-foreground": "0 0% 100%",
  "--border": "217.2 32.6% 17.5%",
  "--input": "217.2 32.6% 17.5%",
  "--ring": "224.3 76.3% 48%",
  "--radius": "1rem",
  "--positive": "142 72% 29%",
  "--positive-foreground": "0 0% 100%",
  "--warning": "39.6 100% 50.2%",
  "--warning-foreground": "39.6 100% 50.2%",
  "--link": "216.89 100% 59.61%"
};

export const THEMES: UnativeThemes = {
  "default": {
    "light": DEFAULT_THEME_LIGHT,
    "dark": DEFAULT_THEME_DARK,
  },

  "brown": {
    "light": {
      ...DEFAULT_THEME_LIGHT,
      "--primary": "30 100% 50%"
    },
    "dark": {
      ...DEFAULT_THEME_DARK,
      "--primary": "30 100% 50%"
        
    }
  },

  "positive": {
    "light": {
      ...DEFAULT_THEME_LIGHT,
      "--primary": "142 72% 29%"
    },
    "dark": {
      ...DEFAULT_THEME_DARK,
      "--primary": "142 72% 29%"
        
    }
  },

  "rose": {
    "light": {
      ...DEFAULT_THEME_LIGHT,
      "--primary": "340 100% 50%"
    },
    "dark": {
      ...DEFAULT_THEME_DARK,
      "--primary": "340 100% 50%"
        
    }
  },

  "retro": {
    "light": {
      ...DEFAULT_THEME_LIGHT,
      "--primary": "30 100% 50%"
    },
    "dark": {
      ...DEFAULT_THEME_DARK,
      "--primary": "30 100% 50%"
        
    }
  }
}