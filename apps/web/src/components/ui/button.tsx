import * as React from "react";
import { tv, VariantProps } from "tailwind-variants";
import { Slot } from "@radix-ui/react-slot";

import { DEFAULT_VARIANTS } from "@/lib/unative/default-variants";
import { cn } from "@/lib/utils";

const buttonVariants = tv({
  slots: {
    base: "group flex items-center justify-center rounded-button web:ring-offset-background web:transition-colors web:focus-visible:outline-none web:focus-visible:ring-2 web:focus-visible:ring-ring web:focus-visible:ring-offset-2 flex-row gap-2",
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
        base: "h-9 px-3",
        text: "",
      },
      lg: {
        base: "h-11 px-8 native:h-14",
        text: "",
      },
      xl: {
        base: "h-14 px-8 native:h-16",
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

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  onPress?: (
    event: React.MouseEvent<HTMLButtonElement>,
  ) => void | Promise<void>;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { className, variant, size, asChild = false, onClick, onPress, ...props },
    ref,
  ) => {
    const Comp = asChild ? Slot : "button";

    const { base, text } = buttonVariants({
      variant,
      size: variant === "unstyled" ? "unstyled" : size,
    });

    return (
      <Comp
        suppressHydrationWarning
        className={cn(base(), text())}
        ref={ref}
        onClick={onClick || onPress}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";
