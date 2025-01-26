import React from "react";
import type { CSSProperties, ReactNode } from "react";
import { omit } from "remeda";

type Numb = string | number;

export interface SvgProps {
  [key: string]: any;
}

function copypaste<T extends Record<string, any>>(
  from: T,
  to: T,
  ...props: (keyof T)[]
): void {
  props.forEach((prop) => {
    if (prop in from) to[prop] = from[prop];
  });
}

function prepare(props: SvgProps): SvgProps {
  const clean: SvgProps = omit(props, [
    "translate",
    "scale",
    "rotate",
    "skewX",
    "skewY",
    "originX",
    "originY",
    "fontFamily",
    "fontSize",
    "fontWeight",
    "fontStyle",
    "style",
  ]);

  const transform: string[] = [];

  if ("originX" in props || "originY" in props)
    transform.push(`translate(${props.originX || 0}, ${props.originY || 0})`);
  if ("translate" in props) transform.push(`translate(${props.translate})`);
  if ("scale" in props) transform.push(`scale(${props.scale})`);
  if ("rotate" in props) transform.push(`rotate(${props.rotate})`);
  if ("skewX" in props) transform.push(`skewX(${props.skewX})`);
  if ("skewY" in props) transform.push(`skewY(${props.skewY})`);
  if ("originX" in props || "originY" in props)
    transform.push(`translate(${-props.originX || 0}, ${-props.originY || 0})`);

  if (transform.length) clean.transform = transform.join(" ");

  const style: CSSProperties = "style" in props ? props.style : {};
  copypaste(props, style, "fontFamily", "fontSize", "fontWeight", "fontStyle");
  clean.style = style;

  const preserve = clean.preserveAspectRatio;
  if (preserve && preserve !== "none" && !preserve.includes(" ")) {
    clean.preserveAspectRatio = "xMidYMid " + preserve;
  }

  return clean;
}

function createSvgElement(type: string, props: SvgProps, children?: ReactNode) {
  return React.createElement(type, prepare(props), children);
}

export const Circle = (props: SvgProps) => createSvgElement("circle", props);
export const ClipPath = (props: SvgProps) =>
  createSvgElement("clipPath", props);
export const Defs = (props: SvgProps) => createSvgElement("defs", props);
export const Ellipse = (props: SvgProps) => createSvgElement("ellipse", props);
export const ForeignObject = ({
  children,
  ...props
}: SvgProps & { children?: ReactNode }) =>
  createSvgElement("foreignObject", props, children);
export const G = ({ x, y, ...props }: SvgProps & { x?: Numb; y?: Numb }) => {
  if ((x || y) && !props.translate) {
    props.translate = `${x || 0}, ${y || 0}`;
  }
  return createSvgElement("g", props);
};
export const Image = (props: SvgProps) => createSvgElement("image", props);
export const Line = (props: SvgProps) => createSvgElement("line", props);
export const LinearGradient = (props: SvgProps) =>
  createSvgElement("linearGradient", props);
export const Mask = (props: SvgProps) => createSvgElement("mask", props);
export const Path = (props: SvgProps) => createSvgElement("path", props);
export const Pattern = (props: SvgProps) => createSvgElement("pattern", props);
export const Polygon = (props: SvgProps) => createSvgElement("polygon", props);
export const Polyline = (props: SvgProps) =>
  createSvgElement("polyline", props);
export const RadialGradient = (props: SvgProps) =>
  createSvgElement("radialGradient", props);
export const Rect = (props: SvgProps) => createSvgElement("rect", props);
export const Stop = (props: SvgProps) => createSvgElement("stop", props);
export const Svg = ({
  title,
  children,
  ...props
}: SvgProps & { title?: string; children?: ReactNode }) => {
  if (title) {
    return createSvgElement(
      "svg",
      { role: "img", "aria-label": title, ...props },
      <>
        <title>{title}</title>
        {children}
      </>,
    );
  }
  return createSvgElement("svg", props, children);
};
export const Symbol = (props: SvgProps) => createSvgElement("symbol", props);
export const Text = ({
  x,
  y,
  dx,
  dy,
  rotate,
  ...props
}: SvgProps & { x?: Numb; y?: Numb; dx?: Numb; dy?: Numb; rotate?: Numb }) =>
  createSvgElement("text", { x, y, dx, dy, rotate, ...props });
export const TSpan = (
  props: SvgProps & { x?: Numb; y?: Numb; dx?: Numb; dy?: Numb; rotate?: Numb },
) => createSvgElement("tspan", props);
export const TextPath = (props: SvgProps) =>
  createSvgElement("textPath", props);
export const Use = (props: SvgProps) => createSvgElement("use", props);

export default Svg;
