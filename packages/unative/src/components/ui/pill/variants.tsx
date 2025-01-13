/** @jsxImportSource nativewind */

import { tv, VariantProps } from "tailwind-variants";

import { DEFAULT_VARIANTS } from "../../../core/default-variants";

export const pillVariants = tv({
  slots: {
    base: "",
    text: "",
  },
  variants: {
    variant: {
      ...DEFAULT_VARIANTS,
    },
    size: {
      default: {
        base: "px-2 py-1.5 rounded-lg",
        text: "",
      },
    },
  },
  defaultVariants: {
    variant: "default",
    size: "default",
  },
});

export type PillVariantProps = VariantProps<typeof pillVariants>;
