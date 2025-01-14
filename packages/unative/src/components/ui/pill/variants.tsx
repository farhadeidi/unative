/** @jsxImportSource nativewind */

import { tv, VariantProps } from "tailwind-variants";

import { DEFAULT_VARIANTS } from "../../../core/default-variants";

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
