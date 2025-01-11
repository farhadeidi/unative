/** @jsxImportSource nativewind */

import React from "react";
import { View } from "react-native";

import { cn } from "../../../utils";
import { Box, BoxProps } from "../box";
import { TextClassContext } from "../text";

import { SwitchVariantProps, switchVariants } from "./variants";

export type SwitchProps = BoxProps & SwitchVariantProps;
export const Switch = React.forwardRef<View, SwitchProps>(
  ({ className, variant, size, ...props }, ref) => {
    const { base, text } = switchVariants({
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
Switch.displayName = "Switch";
