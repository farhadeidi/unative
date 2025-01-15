/** @jsxImportSource nativewind */

import React from "react";
import { View } from "react-native";
import { tv, VariantProps } from "tailwind-variants";

import { cn } from "../../lib/utils";
import { Box, BoxProps } from "../box";
import { TextClassContext } from "../text";

export const cardVariants = tv({
  slots: {
    base: "rounded-card border border-border bg-card shadow-sm shadow-foreground/10",
    text: "",
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

export type CardVariantProps = VariantProps<typeof cardVariants>;
export type CardProps = BoxProps & CardVariantProps;
export const Card = React.forwardRef<View, CardProps>(
  ({ className, variant, size, ...props }, ref) => {
    const { base, text } = cardVariants({
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
Card.displayName = "Card";

export const CardHeader = React.forwardRef<View, CardProps>(
  ({ className, variant, size, ...props }, ref) => {
    const { base, text } = cardVariants({
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
CardHeader.displayName = "Card";
