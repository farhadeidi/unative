/** @jsxImportSource nativewind */

import * as React from "react";
import { Text as RNText } from "react-native";

import { cn } from "../../../utils";
import { SharedPrimitivesSlot, SharedPrimitiveTypes } from "../../primitives";

const TextClassContext = React.createContext<string | undefined>(undefined);
export type TextProps = SharedPrimitiveTypes.SlottableTextProps;

const Text = React.forwardRef<
  SharedPrimitiveTypes.TextRef,
  SharedPrimitiveTypes.SlottableTextProps
>(({ className, asChild = false, ...props }, ref) => {
  const textClass = React.useContext(TextClassContext);
  const Component = asChild ? SharedPrimitivesSlot.Text : RNText;

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
});
Text.displayName = "Text";

export { Text, TextClassContext };
