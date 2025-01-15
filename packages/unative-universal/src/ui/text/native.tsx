/** @jsxImportSource nativewind */

import * as React from "react";
import { Text as RNText } from "react-native";
import { Slot, Types } from "@unative/primitives/native/shared";

import { cn } from "../../lib/utils";

const TextClassContext = React.createContext<string | undefined>(undefined);
export type TextProps = Types.SlottableTextProps;

const Text = React.forwardRef<Types.TextRef, Types.SlottableTextProps>(
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
