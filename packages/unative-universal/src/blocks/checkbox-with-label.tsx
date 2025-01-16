import React from "react";
import { Box, BoxProps } from "@unative/universal";

import { cn } from "../lib/utils";

export type CheckboxWithLabelProps = BoxProps & {};
export const CheckboxWithLabel = ({
  className,
  children,
  ...props
}: CheckboxWithLabelProps) => {
  return <Box className={cn("flex flex-row", className)} {...props}></Box>;
};
