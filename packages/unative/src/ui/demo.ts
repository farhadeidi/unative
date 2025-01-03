import { getPlatform } from "../platform";

let componentName = "demo.ts";

const platform = getPlatform();

if (platform.isNodeEnv) {
  componentName = "NodeEnv";
}
if (platform.isReactNative) {
  componentName = "ReactNative";
}

if (platform.isReactNativeWeb) {
  componentName = "ReactNativeWeb";
}

if (platform.isWebCSR) {
  componentName = "WebCSR";
}

if (platform.isWebRSC) {
  componentName = "WebRSC";
}

export { componentName };
