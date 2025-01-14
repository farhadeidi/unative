/** @jsxImportSource nativewind */

import React from "react";
import { View, ViewProps } from "react-native";

import { cn } from "../../../utils";

export type BoxProps = ViewProps;
export const Box = React.forwardRef<View, BoxProps>((props, ref) => {
  return <View ref={ref} {...props} />;
});
Box.displayName = "Box";

export const HStack = React.forwardRef<View, BoxProps>(
  ({ className, ...props }, ref) => {
    return (
      <Box
        ref={ref}
        className={cn("flex flex-row flex-wrap gap-1", className)}
        {...props}
      />
    );
  },
);
HStack.displayName = "HStack";

export const VStack = React.forwardRef<View, BoxProps>(
  ({ className, ...props }, ref) => {
    return (
      <Box ref={ref} className={cn("flex flex-col", className)} {...props} />
    );
  },
);
VStack.displayName = "VStack";

export const Center = React.forwardRef<View, BoxProps>(
  ({ className, ...props }, ref) => {
    return (
      <Box
        ref={ref}
        className={cn("flex flex-col items-center justify-center", className)}
        {...props}
      />
    );
  },
);
Center.displayName = "Center";
