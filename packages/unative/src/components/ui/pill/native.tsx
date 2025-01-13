/** @jsxImportSource nativewind */

import React from "react";
import { Pressable, View } from "react-native";

import { cn } from "../../../utils";
import { TextClassContext } from "../text";

import { PillVariantProps, pillVariants } from "./variants";

export type PillProps = React.ComponentPropsWithoutRef<typeof Pressable> &
  PillVariantProps;
export const Pill = React.forwardRef<View, PillProps>(
  ({ className, variant, size, disabled, ...props }, ref) => {
    const { base, text } = pillVariants({
      variant,
      size,
    });

    return (
      <TextClassContext.Provider value={text()}>
        <Pressable
          className={cn(
            disabled && "web:pointer-events-none opacity-50",
            base(),
            className,
          )}
          ref={ref}
          role="button"
          disabled={disabled || !props.onPress}
          {...props}
        />
      </TextClassContext.Provider>
    );
  },
);
Pill.displayName = "Pill";

export type { PillVariantProps };
