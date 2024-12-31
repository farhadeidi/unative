/** @jsxImportSource nativewind */

import * as React from "react";
import { Text as RNText } from "react-native";
import {
  SharedPrimitiveTypes,
  SharedPrimitivesSlot,
} from "../../../native/shared-primitives";
import { cn } from "../../../utils";

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
        "text-base font-normal text-foreground web:select-text",
        textClass,
        className
      )}
      ref={ref}
      {...props}
    />
  );
});
Text.displayName = "Text";

export { Text, TextClassContext };
