import React from "react";
import { Box, BoxProps, Text } from "@unative/universal";

import { cn } from "../../lib/utils";

export type ShowcaseProps = BoxProps & {};
export const Showcase = ({ className, children, ...props }: ShowcaseProps) => {
  return (
    <Box className={cn("", className)} {...props}>
      <Text>Hello World</Text>
    </Box>
  );
};
