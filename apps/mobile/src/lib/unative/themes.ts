
import type { UnativeThemes, UnativeThemeVariables } from "unative/theme";

/*
** Auto generated code. Don't modify manually.
** This file is generated by theme-colors-extractor.ts.
** It provides a map of theme colors for different schemes.
*/

export const DEFAULT_THEME_LIGHT: UnativeThemeVariables = {
  "--background": "0 0% 100%",
  "--foreground": "0 0% 0%",
  "--card": "0 0% 100%",
  "--card-foreground": "0 0% 0%",
  "--popover": "0 0% 100%",
  "--popover-foreground": "0 0% 0%",
  "--primary": "220 80% 50%",
  "--primary-foreground": "0 0% 100%",
  "--secondary": "0 0% 0%",
  "--secondary-foreground": "0 0% 100%",
  "--muted": "0 0% 90%",
  "--muted-foreground": "0 0% 30%",
  "--accent": "220 80% 90%",
  "--accent-foreground": "222.2 47.4% 11.2%",
  "--destructive": "0 80% 60%",
  "--destructive-foreground": "0 0% 100%",
  "--border": "0 0% 90%",
  "--input": "214.3 31.8% 91.4%",
  "--ring": "221.2 83.2% 53.3%",
  "--radius": "0.5rem",
  "--radius-lg": "2rem",
  "--radius-button": "6px",
  "--radius-card": "6px",
  "--positive": "142 60% 40%",
  "--positive-foreground": "0 0% 100%",
  "--warning": "40 100% 50%",
  "--warning-foreground": "39.6 100% 50.2%",
  "--link": "216 100% 60%"
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
  "--radius": "3rem",
  "--radius-lg": "2rem",
  "--radius-button": "6px",
  "--radius-card": "6px",
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
      "--background": "31 57% 93%",
      "--primary": "30 100% 50%",
      "--primary-foreground": "0 0% 100%",
      "--card": "31 57% 85%",
      "--accent": "30 100% 80%",
      "--radius": "0.5rem",
      "--radius-lg": "2rem",
      "--radius-button": "24px",
      "--radius-card": "0.5rem"
    },
    "dark": {
      ...DEFAULT_THEME_DARK,
      "--background": "0 0% 0%",
      "--primary": "30 100% 50%",
      "--primary-foreground": "0 0% 100%",
      "--card": "31 57% 8%",
      "--accent": "30 100% 30%",
      "--radius": "0.5rem",
      "--radius-lg": "2rem",
      "--radius-button": "24px",
      "--radius-card": "0.5rem"
        
    }
  },

  "third": {
    "light": {
      ...DEFAULT_THEME_LIGHT,
      "--background": "0 0% 100%",
      "--primary": "16 65% 40%",
      "--primary-foreground": "0 0% 100%"
    },
    "dark": {
      ...DEFAULT_THEME_DARK,
      "--background": "0 0% 0%",
      "--primary": "16 65% 40%",
      "--primary-foreground": "0 0% 100%"
        
    }
  }
}