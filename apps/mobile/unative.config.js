const webSafeFonts = [
  "InterVariable",
  "InterVariableItalic",
  "ui-sans-serif",
  "system-ui",
  "sans-serif",
  '"Apple Color Emoji"',
  '"Segoe UI Emoji"',
  '"Segoe UI Symbol"',
  '"Noto Color Emoji"',
];

const fonts = {
  thin: { weight: 100, normal: "Inter-Thin", italic: "Inter-ThinItalic" },
  extralight: {
    weight: 200,
    normal: "Inter-ExtraLight",
    italic: "Inter-ExtraLightItalic",
  },
  light: { weight: 300, normal: "Inter-Light", italic: "Inter-LightItalic" },
  normal: {
    weight: 400,
    normal: "Inter-Regular",
    italic: "Inter-RegularItalic",
  },
  medium: { weight: 500, normal: "Inter-Medium", italic: "Inter-MediumItalic" },
  semibold: {
    weight: 600,
    normal: "Inter-SemiBold",
    italic: "Inter-SemiBoldItalic",
  },
  bold: { weight: 700, normal: "Inter-Bold", italic: "Inter-BoldItalic" },
  extrabold: {
    weight: 800,
    normal: "Inter-ExtraBold",
    italic: "Inter-ExtraBoldItalic",
  },
  black: { weight: 900, normal: "Inter-Black", italic: "Inter-BlackItalic" },
};

const getFontFamilies = () => {
  const fontFamilies = {};
  for (const [key, value] of Object.entries(fonts)) {
    if (value.normal) {
      fontFamilies[`.font-${key}`] = {
        "font-family": value.normal,
        "font-weight": value.weight,
        "font-style": "normal",
      };
      fontFamilies[`#unp-native-web .font-${key}`] = {
        "font-family": webSafeFonts.join(", "),
        "font-weight": value.weight,
        "font-style": "normal",
      };
    }

    if (value.italic) {
      fontFamilies[`.font-${key}-italic`] = {
        "font-family": value.italic,
        "font-weight": value.weight,
        "font-style": "normal",
      };

      fontFamilies[`#unp-native-web .font-${key}-italic`] = {
        "font-family": `InterVariableItalic, ${webSafeFonts.join(", ")}`,
        "font-weight": value.weight,
        "font-style": "italic",
      };
    }
  }

  return fontFamilies;
};

module.exports = {
  getFontFamilies,
  cssFontFamilies: getFontFamilies(),
  fonts,
};
