export const getPlatform = () => {
  const isNodeEnv = typeof process !== "undefined" && !!process.versions?.node;
  const isWebCSR =
    typeof window !== "undefined" && typeof document !== "undefined";
  const isWebRSC =
    typeof process !== "undefined" && process.env.REACT_RSC === "true";
  const isReactNative =
    typeof navigator !== "undefined" && navigator.product === "ReactNative";
  const isReactNativeWeb =
    isWebCSR &&
    typeof navigator !== "undefined" &&
    navigator.product === "ReactNative";

  return {
    isNodeEnv,
    isWebCSR,
    isWebRSC,
    isReactNative,
    isReactNativeWeb,
  };
};
