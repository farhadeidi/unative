/** @jsxImportSource nativewind */

import React from "react";
import { View } from "react-native";
import { tv, VariantProps } from "tailwind-variants";

import { cn } from "../../lib/utils";
import { Box, BoxProps } from "../box";
import { TextClassContext } from "../text";

export const skeletonVariants = tv({
  slots: {
    base: "bg-muted",
    text: "text-muted-foreground",
  },
  variants: {
    variant: {
      default: {
        base: "",
        text: "",
      },
    },
    size: {
      default: {
        base: "",
        text: "",
      },
    },
  },
  defaultVariants: {
    variant: "default",
    size: "default",
  },
});

export type SkeletonVariantProps = VariantProps<typeof skeletonVariants>;
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
