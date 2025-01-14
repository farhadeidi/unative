/** @jsxImportSource nativewind */

import { tv, VariantProps } from "tailwind-variants";

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
