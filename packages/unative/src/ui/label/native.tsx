import * as React from "react";
import { LabelPrimitive } from "@unative/primitives/native";

import { cn } from "../../lib/utils";

const Label = React.forwardRef<
  LabelPrimitive.TextRef,
  LabelPrimitive.TextProps & { onClick?: () => void }
>(
  (
    {
      className,
      onPress,
      onClick,
      onLongPress,
      onPressIn,
      onPressOut,
      ...props
    },
    ref,
  ) => (
    <LabelPrimitive.Root
      className="web:cursor-default"
      onPress={onPress || onClick}
      onLongPress={onLongPress}
      onPressIn={onPressIn}
      onPressOut={onPressOut}
    >
      <LabelPrimitive.Text
        ref={ref}
        className={cn(
          "native:text-base web:peer-disabled:cursor-not-allowed web:peer-disabled:opacity-70 text-sm font-medium leading-none text-foreground",
          className,
        )}
        {...props}
      />
    </LabelPrimitive.Root>
  ),
);
Label.displayName = LabelPrimitive.Root.displayName;

export { Label };
