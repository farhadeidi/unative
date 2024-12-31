/** @jsxImportSource nativewind */

import { ActivityIndicator, Pressable } from "react-native";
import { type ButtonVariants, buttonVariants } from "./button-variants";
import React from "react";
import { TextClassContext } from "../text/text.native";
import { cn } from "../../../utils";

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
        ref={ref}
        role="button"
        {...props}
        className={cn(
          props.disabled && "opacity-50 web:pointer-events-none",
          className
        )}
      />
      {isLoading && (
        <ActivityIndicator className="absolute left-1/2 top-1/2 z-10 -ml-3 -mt-3 text-foreground" />
      )}
    </TextClassContext.Provider>
  );
});
Button.displayName = "Button";
