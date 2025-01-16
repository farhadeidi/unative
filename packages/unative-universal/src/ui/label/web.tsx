"use client";

import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { LabelPrimitive } from "@unative/primitives/web/label";

import { cn } from "../../lib/utils";

const labelVariants = cva(
  "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
);

const Label = React.forwardRef<
  React.ElementRef<typeof LabelPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root> &
    VariantProps<typeof labelVariants> & {
      onPress?: () => void | Promise<void>;
    }
>(({ className, onClick, onPress, ...props }, ref) => (
  <LabelPrimitive.Root
    ref={ref}
    className={cn(labelVariants(), className)}
    onClick={onClick || onPress}
    {...props}
  />
));
Label.displayName = LabelPrimitive.Root.displayName;

export { Label };
