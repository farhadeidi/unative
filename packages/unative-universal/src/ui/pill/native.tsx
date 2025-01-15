import React from "react";
import { Pressable, View } from "react-native";
import { tv, VariantProps } from "tailwind-variants";

import { DEFAULT_VARIANTS } from "../../lib/default-variants";
import { cn } from "../../lib/utils";
import { TextClassContext } from "../text/native";

export const pillVariants = tv({
  slots: {
    base: "rounded-button",
    text: "",
  },
  variants: {
    variant: {
      ...DEFAULT_VARIANTS,
    },
    size: {
      default: {
        base: "px-3 py-1.5",
        text: "text-sm",
      },
      lg: {
        base: "px-2 py-1.5 rounded",
        text: "text-base",
      },
    },
  },
  defaultVariants: {
    variant: "default",
    size: "default",
  },
});

export type PillVariantProps = VariantProps<typeof pillVariants>;
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
