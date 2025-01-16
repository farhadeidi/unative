import React from "react";
import { Box, BoxProps } from "@unative/universal";

import { cn } from "../lib/utils";

export type ProductCardProps = BoxProps & {};
export const ProductCard = ({
  className,
  children,
  ...props
}: ProductCardProps) => {
  return <Box className={cn("flex flex-row", className)} {...props}></Box>;
};
