import { type UnativeThemeVariables } from "../../types";
// import { isWeb } from "../../helpers";

// const isHslColor = (value: string): boolean => {
//   const hslRegex =
//     /^\s*(\d+(?:\.\d+)?)\s+(\d+(?:\.\d+)?%)\s+(\d+(?:\.\d+)?%)\s*$/;
//   if (!hslRegex.test(value)) {
//     return false;
//   }
//   const [, h, s, l] = value.match(hslRegex)!;

//   // Check if the values are within the valid ranges
//   const hue = parseFloat(h);
//   const saturation = parseFloat(s);
//   const lightness = parseFloat(l);

//   return (
//     hue >= 0 &&
//     hue <= 360 &&
//     saturation >= 0 &&
//     saturation <= 100 &&
//     lightness >= 0 &&
//     lightness <= 100
//   );
// };

// /**
//  * Converts CSS size values to pixels
//  * @param value Size value as string (e.g., "2rem", "16px", "1.5em")
//  * @param baseSize Base pixel size for rem/em calculations (default: 16)
//  * @returns Size in pixels as string (e.g., "32px")
//  */
// const getPixelValue = (value: string, baseSize: number = 16): string => {
//   // Return if already in pixels or empty
//   if (!value || value.endsWith("px") || isWeb) return value;

//   // Match number and unit
//   const match = value.match(/^([\d.]+)(rem|em|px)?$/);
//   if (!match) return value;

//   const [, num, unit] = match;
//   const numValue = parseFloat(num);

//   switch (unit) {
//     case "rem":
//     case "em":
//       return `${numValue * baseSize}px`;
//     default:
//       return `${numValue}px`;
//   }
// };

// //
// //
// //

// const getOptimizedSizes = ({
//   theme,
//   baseSize,
// }: {
//   theme: UnativeThemeVariables;
//   baseSize: number;
// }) => {
//   if (isWeb) return theme;

//   const result = { ...theme };
//   Object.entries(result).forEach(([keyName, value]) => {
//     if (typeof value !== "string") return;
//     if (value && value.match(/^([\d.]+)(rem|em|px)?$/)) {
//       result[keyName as keyof UnativeThemeVariables] = themeUtils.getPixelValue(
//         value,
//         baseSize
//       );
//     }
//   });

//   return result;
// };

// const getUsableThemeValues = (
//   values: UnativeThemeVariables
// ): UnativeThemeVariables => {
//   let result = { ...values };

//   Object.keys(values).forEach((property) => {
//     const value = values[property as keyof UnativeThemeVariables];
//     if (isHslColor(value)) {
//       result[property as keyof UnativeThemeVariables] = `hsl(${value})`;
//     } else if (value.match(/^([\d.]+)(rem|em|px)?$/)) {
//       result[property as keyof UnativeThemeVariables] = getPixelValue(value);
//     }
//   });

//   return result;
// };

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

/**
 * Converts CSS size values to pixels
 * @param value Size value as string (e.g., "2rem", "16px", "1.5em")
 * @param baseSize Base pixel size for rem/em calculations (default: 16)
 * @returns Size in pixels as string (e.g., "32px")
 */
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

const getNativeOptimizedThemeValues = ({
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

export const themeUtils = {
  isHslColor,
  getPixelValue,
  getNativeOptimizedThemeValues,
};
