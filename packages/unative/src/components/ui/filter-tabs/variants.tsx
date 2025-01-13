/** @jsxImportSource nativewind */

import { tv, VariantProps } from "tailwind-variants";

export const filterTabsVariants = tv({
  slots: {
    base: "px-4 py-2",
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

export type FilterTabsVariantProps = VariantProps<typeof filterTabsVariants>;
