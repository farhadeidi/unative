"use client";
import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { type ButtonVariants, buttonVariants } from "./button-variants";
import { cn } from "../../../utils";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    ButtonVariants {
  asChild?: boolean;
  onPress?: (
    event: React.MouseEvent<HTMLButtonElement>
  ) => void | Promise<void>;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { className, variant, size, asChild = false, onClick, onPress, ...props },
    ref
  ) => {
    const Comp = asChild ? Slot : "button";

    const { base } = buttonVariants({
      variant,
      size: variant === "unstyled" ? "unstyled" : size,
    });

    return (
      <Comp
        className={cn(base())}
        ref={ref}
        onClick={onClick || onPress}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";
