/** @jsxImportSource nativewind */

import { tv, VariantProps } from "tailwind-variants";

import { DEFAULT_VARIANTS } from "../../../core/default-variants";

export const buttonVariants = tv({
  slots: {
    base: "group flex items-center justify-center rounded-md web:ring-offset-background web:transition-colors web:focus-visible:outline-none web:focus-visible:ring-2 web:focus-visible:ring-ring web:focus-visible:ring-offset-2 flex-row gap-2",
    text: "web:whitespace-nowrap font-medium text-foreground web:transition-colors",
  },
  variants: {
    variant: {
      ...DEFAULT_VARIANTS,
    },
    size: {
      default: {
        base: "h-10 px-4 py-2 native:h-12 native:px-5 native:py-3",
        text: "",
      },
      sm: {
        base: "h-9 rounded-md px-3",
        text: "",
      },
      lg: {
        base: "h-11 rounded-md px-8 native:h-14",
        text: "",
      },
      xl: {
        base: "h-14 rounded-md px-8 native:h-16",
        text: "",
      },
      icon: {
        base: "h-10 w-10",
        text: "",
      },
      iconLg: {
        base: "h-14 w-14",
        text: "",
      },
      iconXl: {
        base: "h-16 w-16",
        text: "",
      },
      unstyled: {
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

export type ButtonVariants = VariantProps<typeof buttonVariants>;
