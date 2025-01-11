/** @jsxImportSource nativewind */

import React from "react";
import { View } from "react-native";

import { cn } from "../../../utils";
import { Box, BoxProps } from "../box";
import { TextClassContext } from "../text";

import { SpinnerVariantProps, spinnerVariants } from "./variants";

export type SpinnerProps = BoxProps & SpinnerVariantProps;
export const Spinner = React.forwardRef<View, SpinnerProps>(
  ({ className, variant, size, ...props }, ref) => {
    const { base, text } = spinnerVariants({
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
Spinner.displayName = "Spinner";
