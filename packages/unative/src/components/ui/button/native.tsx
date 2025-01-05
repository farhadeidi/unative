/** @jsxImportSource nativewind */

import React from "react";
import { ActivityIndicator, Pressable } from "react-native";

import { cn } from "../../../utils";
import { TextClassContext } from "../text/native";

import { ButtonVariants, buttonVariants } from "./variants";

export type ButtonProps = React.ComponentPropsWithoutRef<typeof Pressable> &
  ButtonVariants & {
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
          props.disabled && "web:pointer-events-none opacity-50",
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
