import React from "react";
import type { SvgProps } from "unative/ui/svg";

export type IconVariantName =
  | "bold"
  | "broken"
  | "bulk"
  | "linear"
  | "outline"
  | "twotone";

export type IconProps = SvgProps & {
  size?: number;
  variant?: IconVariantName;
  className?: string;
};

export type IconVariants = {
  [K in IconVariantName]: React.FC<IconProps>;
};

export const defaultOptions = {
  variant: "bold" as IconVariantName,
};
