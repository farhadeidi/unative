/** @jsxImportSource nativewind */

import { tv, VariantProps } from "tailwind-variants";

export const selectVariants = tv({
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

export type SelectVariantProps = VariantProps<typeof selectVariants>;
