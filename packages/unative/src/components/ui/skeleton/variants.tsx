/** @jsxImportSource nativewind */

import { tv, VariantProps } from "tailwind-variants";

export const skeletonVariants = tv({
  slots: {
    base: "bg-muted",
    text: "text-muted-foreground",
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

export type SkeletonVariantProps = VariantProps<typeof skeletonVariants>;
