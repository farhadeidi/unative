import React from "react";
import { cssInterop } from "nativewind";
import { View } from "react-native";
import type { SvgProps } from "react-native-svg";
import RNSvg, {
  Circle,
  ClipPath,
  Defs,
  Ellipse,
  ForeignObject,
  G,
  Image,
  Line,
  LinearGradient,
  Mask,
  Path,
  Pattern,
  Polygon,
  Polyline,
  RadialGradient,
  Rect,
  Stop,
  Symbol,
  Text,
  TextPath,
  TSpan,
  Use,
} from "react-native-svg";

/**
 * Return a SVG element.
 *
 * @param {Object} props The properties that are spread on the SVG element.
 * @returns {React.Component} SVG.
 * @public
 */
const Svg = (props: SvgProps) => {
  const { title, ...rest } = props;

  if (title) {
    return (
      <View accessible={true} accessibilityLabel={title}>
        <RNSvg {...rest} />
      </View>
    );
  }

  return <RNSvg {...rest} />;
};

cssInterop(Svg, {
  className: {
    target: "style",
  },
});

export {
  Circle,
  ClipPath,
  Defs,
  Ellipse,
  ForeignObject,
  G,
  Image,
  Line,
  LinearGradient,
  Mask,
  Path,
  Pattern,
  Polygon,
  Polyline,
  RadialGradient,
  Rect,
  Stop,
  Svg,
  Symbol,
  Text,
  TextPath,
  TSpan,
  Use,
};

export type { SvgProps };
export default Svg;
