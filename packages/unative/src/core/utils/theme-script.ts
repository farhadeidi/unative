export const configureThemeScript = (
  themes: string[],
  newTheme: string | undefined = undefined,
  defaultTheme = "default"
) => {
  const el = document.documentElement;
  el.classList.remove(...themes.map((el) => `theme-${el}`));
  const theme =
    newTheme || localStorage.getItem("unative-theme-name") || defaultTheme;
  el.classList.add(`theme-${theme}`);
};
