/** @jsxImportSource nativewind */

import React from "react";
import { View } from "react-native";

import { cn } from "../../../utils";
import { Box, BoxProps } from "../box";
import { TextClassContext } from "../text";

import { TypographyVariantProps, typographyVariants } from "./variants";

export type TypographyProps = BoxProps & TypographyVariantProps;
export const Typography = React.forwardRef<View, TypographyProps>(
  ({ className, variant, size, ...props }, ref) => {
    const { base, text } = typographyVariants({
      variant,
      size,
    });

    return (
      <TextClassContext.Provider value={text()}>
        <Box ref={ref} className={cn(base(), className)} {...props} />
      </TextClassContext.Provider>
    );
  },
);
Typography.displayName = "Typography";
