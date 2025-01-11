/** @jsxImportSource nativewind */

import React from "react";
import { View } from "react-native";

import { cn } from "../../../utils";
import { Box, BoxProps } from "../box";
import { TextClassContext } from "../text";

import { SelectVariantProps, selectVariants } from "./variants";

export type SelectProps = BoxProps & SelectVariantProps;
export const Select = React.forwardRef<View, SelectProps>(
  ({ className, variant, size, ...props }, ref) => {
    const { base, text } = selectVariants({
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
Select.displayName = "Select";
