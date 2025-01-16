import React from "react";
import { Box, BoxProps } from "@unative/universal";

import { cn } from "../lib/utils";

export type SwitchWithLabelProps = BoxProps & {};
export const SwitchWithLabel = ({
  className,
  children,
  ...props
}: SwitchWithLabelProps) => {
  return <Box className={cn("flex flex-row", className)} {...props}></Box>;
};
