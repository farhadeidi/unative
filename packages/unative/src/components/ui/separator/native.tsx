/** @jsxImportSource nativewind */

import * as React from "react";
import { View } from "react-native";

import { cn } from "../../../utils";
import * as Slot from "../../primitives/slot";
import { SlottableViewProps, ViewRef } from "../../primitives/types";

type RootProps = SlottableViewProps & {
  orientation?: "horizontal" | "vertical";
  decorative?: boolean;
};

type RootRef = ViewRef;

export const Separator = React.forwardRef<RootRef, RootProps>(
  (
    {
      className,
      orientation = "horizontal",
      decorative = true,
      asChild,
      ...props
    },
    ref,
  ) => {
    const Component = asChild ? Slot.View : View;
    return (
      <Component
        ref={ref}
        role={decorative ? "presentation" : "separator"}
        aria-orientation={orientation}
        className={cn(
          "shrink-0 bg-border",
          orientation === "horizontal" ? "h-[1px] w-full" : "h-full w-[1px]",
          className,
        )}
        {...props}
      />
    );
  },
);
Separator.displayName = "Separator";
