/** @jsxImportSource nativewind */

import React from "react";
import { View } from "react-native";

import { cn } from "../../../utils";
import { Box, BoxProps } from "../box";
import { TextClassContext } from "../text";

import { CheckboxVariantProps, checkboxVariants } from "./variants";

export type CheckboxProps = BoxProps & CheckboxVariantProps;
export const Checkbox = React.forwardRef<View, CheckboxProps>(
  ({ className, variant, size, ...props }, ref) => {
    const { base, text } = checkboxVariants({
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
Checkbox.displayName = "Checkbox";
