import * as React from "react";
import { Text as RNText } from "react-native";
import {
  SharedPrimitivesSlot,
  SharedPrimitiveTypes,
} from "@unative/primitives/native/shared";

import { cn } from "@/lib/utils";

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
        "font-normal text-base text-foreground web:select-text",
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
