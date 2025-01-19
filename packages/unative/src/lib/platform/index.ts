type PlatformResult =
  | "ssr"
  | "react-native"
  | "native"
  | "react-native-web"
  | "web"
  | "client"
  | "nodejs"
  | "unknown";

const getPlatformOS = (): PlatformResult[] => {
  if (typeof window === "undefined") {
    return ["ssr"];
  }

  if (
    typeof window !== "undefined" &&
    typeof window.navigator !== "undefined" &&
    window.navigator.product === "ReactNative"
  ) {
    return ["native", "react-native"];
  }

  if (
    typeof window !== "undefined" &&
    window.document?.getElementById("unp-native-web") !== null
  ) {
    return ["react-native", "react-native-web"];
  }

  if (typeof window !== "undefined" && typeof document !== "undefined") {
    return ["web", "client"];
  }

  if (typeof process !== "undefined" && process.versions?.node) {
    return ["nodejs"];
  }

  return ["unknown"];
};

const isWeb = () => {
  return getPlatformOS().includes("web");
};

const isWebOrNativeWeb = () => {
  const targets: PlatformResult[] = ["web", "react-native-web"];
  return getPlatformOS().some((platform) => targets.includes(platform));
};

const isNativeWeb = () => {
  return getPlatformOS().includes("react-native-web");
};

const isNativeOrNativeWeb = () => {
  return getPlatformOS().includes("react-native");
};

const isReactNative = () => {
  return getPlatformOS().includes("react-native");
};

const isNativeOnly = () => {
  return getPlatformOS().includes("native");
};

const isSSR = () => {
  return getPlatformOS().includes("ssr");
};

const isNode = () => {
  return getPlatformOS().includes("nodejs");
};

export const platformInfo = {
  getPlatform: getPlatformOS,
  isWeb,
  isReactNative,
  isWebOrNativeWeb,
  isNativeWeb,
  isNativeOrNativeWeb,
  isNativeOnly,
  isSSR,
  isNode,
};

export const getPlatformInfo = () => {
  const result = getPlatformOS();

  return {
    isWeb: result.includes("web"),
    isReactNative: result.includes("react-native"),
    isWebOrNativeWeb: result.some((platform) =>
      ["web", "react-native-web"].includes(platform),
    ),
    isNativeWeb: result.includes("react-native-web"),
    isNativeOrNativeWeb: result.includes("react-native"),
    isNativeOnly: result.includes("native"),
    isSSR: result.includes("ssr"),
    isNode: result.includes("nodejs"),
  };
};
