/** @jsxImportSource nativewind */

import React from "react";
import { View } from "react-native";

import { cn } from "../../../utils";
import { Box, BoxProps } from "../box";
import { TextClassContext } from "../text";

import { CardVariantProps, cardVariants } from "./variants";

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
