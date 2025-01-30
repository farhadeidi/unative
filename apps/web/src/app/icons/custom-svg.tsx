/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { type SVGProps } from "react";

/**
 * Generic SVG wrapper for web.
 *
 * @param {Object} props The properties passed to the SVG element.
 * @returns {React.Element} SVG element.
 */
const Svg = ({
  title,
  ...rest
}: React.SVGProps<SVGSVGElement> & { title?: string }) => {
  if (title) {
    return (
      <div role="img" aria-label={title}>
        <svg {...rest} />
      </div>
    );
  }

  return <svg {...rest} />;
};

// Component Mapping for Web
const createSvgComponent = <T extends keyof JSX.IntrinsicElements>(Tag: T) => {
  const Component = React.forwardRef<SVGElement, React.SVGProps<SVGElement>>(
    ({ children, ...props }, ref) => {
      return React.createElement(Tag, { ref, ...props }, children);
    }
  );

  Component.displayName = `Svg${Tag.charAt(0).toUpperCase() + Tag.slice(1)}`;
  return Component;
};
const Circle = createSvgComponent("circle");
const ClipPath = createSvgComponent("clipPath");
const Defs = createSvgComponent("defs");
const Ellipse = createSvgComponent("ellipse");
const ForeignObject = createSvgComponent("foreignObject");
const G = createSvgComponent("g");
const Image = createSvgComponent("image");
const Line = createSvgComponent("line");
const LinearGradient = createSvgComponent("linearGradient");
const Mask = createSvgComponent("mask");
const Path = createSvgComponent("path");
const Pattern = createSvgComponent("pattern");
const Polygon = createSvgComponent("polygon");
const Polyline = createSvgComponent("polyline");
const RadialGradient = createSvgComponent("radialGradient");
const Rect = createSvgComponent("rect");
const Stop = createSvgComponent("stop");
const Symbol = createSvgComponent("symbol");
const Text = createSvgComponent("text");
const TextPath = createSvgComponent("textPath");
const TSpan = createSvgComponent("tspan");
const Use = createSvgComponent("use");

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

type SvgProps = SVGProps<any>;
export type { SvgProps };
export default Svg;
