/** @jsxImportSource nativewind */

import { tv, VariantProps } from "tailwind-variants";

export const badgeVariants = tv({
  slots: {
    base: "web:inline-flex items-center rounded-full border border-border px-2.5 py-0.5 web:transition-colors web:focus:outline-none web:focus:ring-2 web:focus:ring-ring web:focus:ring-offset-2",
    text: "text-xs font-semibold",
  },
  variants: {
    variant: {
      default: {
        base: "border-transparent bg-primary web:hover:opacity-80 active:opacity-80",
        text: "text-primary-foreground",
      },
      secondary: {
        base: "border-transparent bg-secondary web:hover:opacity-80 active:opacity-80",
        text: "text-secondary-foreground",
      },
      destructive: {
        base: "border-transparent bg-destructive web:hover:opacity-80 active:opacity-80",
        text: "text-destructive-foreground",
      },
      outline: {
        base: "text-foreground",
        text: "text-foreground",
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

export type BadgeVariantProps = VariantProps<typeof badgeVariants>;
