/**
 * Source code copied and adapted from:
 * https://github.com/pacocoursey/next-themes
 * License: MIT (c) 2024 pacocoursey
 */

export const script = (
  attribute: any,
  storageKey: string,
  defaultTheme: any,
  forcedTheme: string,
  themes: any[],
  value: { [x: string]: any },
  enableSystem: any,
  enableColorScheme: any,
) => {
  const el = document.documentElement;
  const systemThemes = ["light", "dark"];

  function updateDOM(theme: string) {
    const attributes = Array.isArray(attribute) ? attribute : [attribute];

    attributes.forEach((attr) => {
      const isClass = attr === "class";
      const classes =
        isClass && value
          ? themes.map((t: string | number) => value[t] || t)
          : themes;
      if (isClass) {
        el.classList.remove(...classes);
        el.classList.add(value[theme] || theme);
      } else {
        el.setAttribute(attr, theme);
      }
    });

    setColorScheme(theme);
  }

  function setColorScheme(theme: string) {
    if (enableColorScheme && systemThemes.includes(theme)) {
      el.style.colorScheme = theme;
    }
  }

  function getSystemTheme() {
    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  }

  if (forcedTheme) {
    updateDOM(forcedTheme);
  } else {
    try {
      const themeName = localStorage.getItem(storageKey) || defaultTheme;
      const isSystem = enableSystem && themeName === "system";
      const theme = isSystem ? getSystemTheme() : themeName;
      updateDOM(theme);
    } catch {
      //
    }
  }
};
