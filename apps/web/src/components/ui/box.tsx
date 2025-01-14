import React from "react";

import { cn } from "@/lib/utils";

export type BoxProps = React.HtmlHTMLAttributes<HTMLDivElement>;
export const Box = React.forwardRef<HTMLDivElement, BoxProps>(
  ({ ...props }, ref) => {
    return <div ref={ref} suppressHydrationWarning {...props} />;
  },
);
Box.displayName = "Box";

export const HStack = React.forwardRef<HTMLDivElement, BoxProps>(
  ({ className, ...props }, ref) => {
    return (
      <Box
        ref={ref}
        className={cn("flex flex-row gap-1", className)}
        {...props}
      />
    );
  },
);
HStack.displayName = "HStack";

export const VStack = React.forwardRef<HTMLDivElement, BoxProps>(
  ({ className, ...props }, ref) => {
    return (
      <Box
        ref={ref}
        className={cn("flex flex-col gap-1", className)}
        {...props}
      />
    );
  },
);
VStack.displayName = "VStack";

export const Center = React.forwardRef<HTMLDivElement, BoxProps>(
  ({ className, ...props }, ref) => {
    return (
      <Box
        ref={ref}
        className={cn(
          "flex flex-col items-center justify-center gap-1",
          className,
        )}
        {...props}
      />
    );
  },
);
Center.displayName = "Center";
