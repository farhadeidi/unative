/** @jsxImportSource nativewind */

import React from "react";
import { View } from "react-native";

import { cn } from "../../../utils";
import { Box, BoxProps } from "../box";
import { TextClassContext } from "../text";

import { LabelVariantProps, labelVariants } from "./variants";

export type LabelProps = BoxProps & LabelVariantProps;
export const Label = React.forwardRef<View, LabelProps>(
  ({ className, variant, size, ...props }, ref) => {
    const { base, text } = labelVariants({
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
Label.displayName = "Label";
