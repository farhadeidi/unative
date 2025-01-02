import { UnativeThemes, UnativeThemeVariables } from "../../types";

const isHslColor = (value: string): boolean => {
  const hslRegex =
    /^\s*(\d+(?:\.\d+)?)\s+(\d+(?:\.\d+)?%)\s+(\d+(?:\.\d+)?%)\s*$/;
  if (!hslRegex.test(value)) {
    return false;
  }
  const [, h, s, l] = value.match(hslRegex)!;

  // Check if the values are within the valid ranges
  const hue = parseFloat(h);
  const saturation = parseFloat(s);
  const lightness = parseFloat(l);

  return (
    hue >= 0 &&
    hue <= 360 &&
    saturation >= 0 &&
    saturation <= 100 &&
    lightness >= 0 &&
    lightness <= 100
  );
};

const getPixelValue = ({
  value,
  baseSize = 16,
  isWeb,
}: {
  value: string;
  baseSize: number;
  isWeb: boolean;
}): string => {
  // Return if already in pixels or empty
  if (!value || value.endsWith("px") || isWeb) return value;

  // Match number and unit
  const match = value.match(/^([\d.]+)(rem|em|px)?$/);
  if (!match) return value;

  const [, num, unit] = match;
  const numValue = parseFloat(num);

  switch (unit) {
    case "rem":
    case "em":
      return `${numValue * baseSize}px`;
    default:
      return `${numValue}px`;
  }
};

const getUsableVariableValue = ({
  value,
  baseRemSize = 16,
  isWeb,
}: {
  value: string;
  baseRemSize?: number;
  isWeb?: boolean;
}) => {
  if (isHslColor(value)) {
    return `hsl(${value})`;
  }
  if (value.match(/^([\d.]+)(rem|em|px)?$/)) {
    value = getPixelValue({ value, baseSize: baseRemSize, isWeb });
  }
  return value;
};

const getExtractedThemeValues = ({
  values,
  baseRemSize = 16,
  isWeb = false,
}: {
  values: UnativeThemeVariables;
  baseRemSize?: number;
  isWeb?: boolean;
}): UnativeThemeVariables => {
  let result = { ...values };

  Object.keys(values).forEach((property) => {
    const value = getUsableVariableValue({
      value: values[property as keyof UnativeThemeVariables],
      baseRemSize,
      isWeb,
    });
    result[property as keyof UnativeThemeVariables] = value;
  });

  return result;
};

const getOptimizedThemes = (values: {
  themes: UnativeThemes;
}): { optimizedThemes: UnativeThemes; cssVars: UnativeThemes } => {
  let optimizedThemes: UnativeThemes = {};
  let cssVars: UnativeThemes = {};

  Object.keys(values.themes).forEach((el) => {
    const lightVars = getExtractedThemeValues({
      values: values.themes[el].light,
      baseRemSize: 16,
      isWeb: true,
    });
    const darkVars = getExtractedThemeValues({
      values: values.themes[el].dark,
      baseRemSize: 16,
      isWeb: true,
    });

    optimizedThemes[el as string] = {
      light: lightVars as UnativeThemeVariables,
      dark: darkVars as UnativeThemeVariables,
    };

    cssVars[el as string] = {
      light: lightVars as UnativeThemeVariables,
      dark: darkVars as UnativeThemeVariables,
    };
  });

  return {
    optimizedThemes,
    cssVars,
  };
};

export const themeUtils = {
  getOptimizedThemes,
};
