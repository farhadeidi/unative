/** @jsxImportSource nativewind */

import { tv, VariantProps } from "tailwind-variants";

export const spinnerVariants = tv({
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

export type SpinnerVariantProps = VariantProps<typeof spinnerVariants>;
