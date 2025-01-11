import React from "react";

import { cn } from "../../../utils";
import { Box, BoxProps } from "../box/web";
import { TextClassContext } from "../text";

import { TextInputVariantProps, textInputVariants } from "./variants";

export type TextInputProps = BoxProps & TextInputVariantProps;
export const TextInput = React.forwardRef<HTMLDivElement, TextInputProps>(
  ({ className, variant, size, ...props }, ref) => {
    const { base, text } = textInputVariants({
      variant,
      size,
    });

    return (
      <TextClassContext.Provider value={text()}>
        <Box ref={ref} className={cn(base(), className)} {...props} />
      </TextClassContext.Provider>
    );
  },
);
TextInput.displayName = "TextInput";
