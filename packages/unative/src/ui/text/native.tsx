/** @jsxImportSource nativewind */

import * as React from "react";
import { Text as RNText } from "react-native";
import { SlottableTextProps, TextRef } from "@unative/primitives/native";
import * as Slot from "@unative/primitives/native/slot";

import { cn } from "../../lib/utils";

import { TextClassContext } from "./text-context";

export type TextProps = SlottableTextProps;

const Text = React.forwardRef<TextRef, SlottableTextProps>(
  ({ className, asChild = false, ...props }, ref) => {
    const textClass = React.useContext(TextClassContext);
    const Component = asChild ? Slot.Text : RNText;

    return (
      <Component
        className={cn(
          "web:select-text text-base font-normal text-foreground",
          textClass,
          className,
        )}
        ref={ref}
        {...props}
      />
    );
  },
);
Text.displayName = "Text";

export { Text, TextClassContext };
