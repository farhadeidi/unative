/** @jsxImportSource nativewind */

import React from "react";
import { View, ViewProps } from "react-native";
import { cn } from "../../../utils";

export type BoxProps = ViewProps;
export const Box = React.forwardRef<View, BoxProps>((props, ref) => {
  return <View ref={ref} {...props} />;
});

export const HStack = React.forwardRef<View, BoxProps>(
  ({ className, ...props }, ref) => {
    return (
      <Box ref={ref} className={cn("flex flex-row", className)} {...props} />
    );
  }
);

export const VStack = React.forwardRef<View, BoxProps>(
  ({ className, ...props }, ref) => {
    return (
      <Box ref={ref} className={cn("flex flex-col", className)} {...props} />
    );
  }
);

export const Center = React.forwardRef<View, BoxProps>(
  ({ className, ...props }, ref) => {
    return (
      <Box
        ref={ref}
        className={cn("flex flex-col justify-center items-center", className)}
        {...props}
      />
    );
  }
);
