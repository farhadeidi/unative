export const configureThemeScript = (
  themes: string[],
  newTheme: string | undefined = undefined,
  defaultTheme = "default",
) => {
  const el = document.documentElement;
  el.classList.remove(...themes.map((el) => `theme-${el}`));
  // el.classList.add(`dark`);
  const theme =
    newTheme || localStorage.getItem("unative-theme-name") || defaultTheme;
  el.classList.add(`theme-${theme}`);

  if (!el.classList.contains("unp-web")) {
    el.classList.add("unp-web");
  }
};

export const configureSchemeScript = (
  values: string[],
  value: string | undefined = undefined,
  defaultValue = "default",
) => {
  const el = document.documentElement;
  el.classList.remove(...values);
  // el.classList.add(`dark`);
  const newValue =
    value || localStorage.getItem("unative-theme-scheme") || defaultValue;
  el.classList.add(newValue);
};
