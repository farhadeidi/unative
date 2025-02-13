import * as React from "react";
import { Platform } from "react-native";
import { SlottableTextProps, TextRef } from "@unative/primitives/native";
import * as Slot from "@unative/primitives/native/slot";

import { cn } from "../../lib/utils";
import { Text } from "../text";

const H1 = React.forwardRef<TextRef, SlottableTextProps>(
  ({ className, asChild = false, ...props }, ref) => {
    const Component = asChild ? Slot.Text : Text;
    return (
      <Component
        role="heading"
        aria-level="1"
        className={cn(
          "web:select-text web:scroll-m-20 text-4xl font-extrabold tracking-tight text-foreground lg:text-5xl",
          className,
        )}
        ref={ref}
        {...props}
      />
    );
  },
);

H1.displayName = "H1";

const H2 = React.forwardRef<TextRef, SlottableTextProps>(
  ({ className, asChild = false, ...props }, ref) => {
    const Component = asChild ? Slot.Text : Text;
    return (
      <Component
        role="heading"
        aria-level="2"
        className={cn(
          "web:select-text web:scroll-m-20 border-b border-border pb-2 text-3xl font-semibold tracking-tight text-foreground first:mt-0",
          className,
        )}
        ref={ref}
        {...props}
      />
    );
  },
);

H2.displayName = "H2";

const H3 = React.forwardRef<TextRef, SlottableTextProps>(
  ({ className, asChild = false, ...props }, ref) => {
    const Component = asChild ? Slot.Text : Text;
    return (
      <Component
        role="heading"
        aria-level="3"
        className={cn(
          "web:select-text web:scroll-m-20 text-2xl font-semibold tracking-tight text-foreground",
          className,
        )}
        ref={ref}
        {...props}
      />
    );
  },
);

H3.displayName = "H3";

const H4 = React.forwardRef<TextRef, SlottableTextProps>(
  ({ className, asChild = false, ...props }, ref) => {
    const Component = asChild ? Slot.Text : Text;
    return (
      <Component
        role="heading"
        aria-level="4"
        className={cn(
          "web:select-text web:scroll-m-20 text-xl font-semibold tracking-tight text-foreground",
          className,
        )}
        ref={ref}
        {...props}
      />
    );
  },
);

H4.displayName = "H4";

const P = React.forwardRef<TextRef, SlottableTextProps>(
  ({ className, asChild = false, ...props }, ref) => {
    const Component = asChild ? Slot.Text : Text;
    return (
      <Component
        className={cn("web:select-text text-base text-foreground", className)}
        ref={ref}
        {...props}
      />
    );
  },
);

P.displayName = "P";

const BlockQuote = React.forwardRef<TextRef, SlottableTextProps>(
  ({ className, asChild = false, ...props }, ref) => {
    const Component = asChild ? Slot.Text : Text;
    return (
      <Component
        // @ts-expect-error
        role={Platform.OS === "web" ? "blockquote" : undefined}
        className={cn(
          "native:mt-4 native:pl-3 web:select-text mt-6 border-l-2 border-border pl-6 text-base italic text-foreground",
          className,
        )}
        ref={ref}
        {...props}
      />
    );
  },
);

BlockQuote.displayName = "BlockQuote";

const Code = React.forwardRef<TextRef, SlottableTextProps>(
  ({ className, asChild = false, ...props }, ref) => {
    const Component = asChild ? Slot.Text : Text;
    return (
      <Component
        // @ts-expect-error
        role={Platform.OS === "web" ? "code" : undefined}
        className={cn(
          "web:select-text relative rounded-md bg-muted px-[0.3rem] py-[0.2rem] text-sm font-semibold text-foreground",
          className,
        )}
        ref={ref}
        {...props}
      />
    );
  },
);

Code.displayName = "Code";

const Lead = React.forwardRef<TextRef, SlottableTextProps>(
  ({ className, asChild = false, ...props }, ref) => {
    const Component = asChild ? Slot.Text : Text;
    return (
      <Component
        className={cn(
          "web:select-text text-xl text-muted-foreground",
          className,
        )}
        ref={ref}
        {...props}
      />
    );
  },
);

Lead.displayName = "Lead";

const Large = React.forwardRef<TextRef, SlottableTextProps>(
  ({ className, asChild = false, ...props }, ref) => {
    const Component = asChild ? Slot.Text : Text;
    return (
      <Component
        className={cn(
          "web:select-text text-xl font-semibold text-foreground",
          className,
        )}
        ref={ref}
        {...props}
      />
    );
  },
);

Large.displayName = "Large";

const Small = React.forwardRef<TextRef, SlottableTextProps>(
  ({ className, asChild = false, ...props }, ref) => {
    const Component = asChild ? Slot.Text : Text;
    return (
      <Component
        className={cn(
          "web:select-text text-sm font-medium leading-none text-foreground",
          className,
        )}
        ref={ref}
        {...props}
      />
    );
  },
);

Small.displayName = "Small";

const Muted = React.forwardRef<TextRef, SlottableTextProps>(
  ({ className, asChild = false, ...props }, ref) => {
    const Component = asChild ? Slot.Text : Text;
    return (
      <Component
        className={cn(
          "web:select-text text-sm text-muted-foreground",
          className,
        )}
        ref={ref}
        {...props}
      />
    );
  },
);

Muted.displayName = "Muted";

export { BlockQuote, Code, H1, H2, H3, H4, Large, Lead, Muted, P, Small };
