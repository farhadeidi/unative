import React from "react";
import { ActivityIndicator, Pressable } from "react-native";
import { tv, VariantProps } from "tailwind-variants";

import { DEFAULT_VARIANTS } from "@/lib/unative/default-variants";
import { cn } from "@/lib/utils";

import { TextClassContext } from "./text";

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

export type ButtonProps = React.ComponentPropsWithoutRef<typeof Pressable> &
  VariantProps<typeof buttonVariants> & {
    isLoading?: boolean;
  };

export const Button = React.forwardRef<
  React.ElementRef<typeof Pressable>,
  ButtonProps
>(({ className, variant, size, isLoading, ...props }, ref) => {
  const { base, text } = buttonVariants({
    variant,
    size: variant === "unstyled" ? "unstyled" : size,
  });

  return (
    <TextClassContext.Provider value={text()}>
      <Pressable
        className={cn(
          props.disabled && "opacity-50 web:pointer-events-none",
          base(),
          className,
        )}
        ref={ref}
        role="button"
        {...props}
      />
      {isLoading && (
        <ActivityIndicator className="absolute left-1/2 top-1/2 z-10 -ml-3 -mt-3 text-foreground" />
      )}
    </TextClassContext.Provider>
  );
});
Button.displayName = "Button";
