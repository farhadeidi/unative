import React from "react";
import type { SvgProps } from "unative/ui/svg";

export type IconVariant = "bold" | "broken" | "bulk" | "linear" | "twotone";

export type IconProps = SvgProps & {
  size?: number;
  variant?: IconVariant;
  className?: string;
  strokeWidth?: number | string;
  strokeLinecap?: "butt" | "round" | "square";
  strokeLineJoin?: "arcs" | "bevel" | "miter" | "miter-clip" | "round";

  alterOpacity?: number;
};

export type IconVariants = {
  [K in IconVariant]: React.FC<IconProps>;
};

export const defaultVariant = "linear" as IconVariant;

export const defaultOptions: Partial<IconProps> = {
  alterOpacity: 0.5,
};
