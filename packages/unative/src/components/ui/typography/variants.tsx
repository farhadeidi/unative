/** @jsxImportSource nativewind */

import { tv, VariantProps } from "tailwind-variants";

export const typographyVariants = tv({
  slots: {
    base: "",
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

export type TypographyVariantProps = VariantProps<typeof typographyVariants>;
