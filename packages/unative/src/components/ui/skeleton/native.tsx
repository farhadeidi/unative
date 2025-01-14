/** @jsxImportSource nativewind */

import React from "react";
import { View } from "react-native";

import { cn } from "../../../utils";
import { Box, BoxProps } from "../box";
import { TextClassContext } from "../text";

import { SkeletonVariantProps, skeletonVariants } from "./variants";

export type SkeletonProps = BoxProps & SkeletonVariantProps;
export const Skeleton = React.forwardRef<View, SkeletonProps>(
  ({ className, variant, size, ...props }, ref) => {
    const { base, text } = skeletonVariants({
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
Skeleton.displayName = "Skeleton";
