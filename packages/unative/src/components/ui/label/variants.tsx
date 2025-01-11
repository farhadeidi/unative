/** @jsxImportSource nativewind */

import { tv, VariantProps } from "tailwind-variants";

export const labelVariants = tv({
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

export type LabelVariantProps = VariantProps<typeof labelVariants>;
