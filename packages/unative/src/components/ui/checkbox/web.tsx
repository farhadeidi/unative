import React from "react";

import { cn } from "../../../utils";
import { Box, BoxProps } from "../box/web";
import { TextClassContext } from "../text";

import { CheckboxVariantProps, checkboxVariants } from "./variants";

export type CheckboxProps = BoxProps & CheckboxVariantProps;
export const Checkbox = React.forwardRef<HTMLDivElement, CheckboxProps>(
  ({ className, variant, size, ...props }, ref) => {
    const { base, text } = checkboxVariants({
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
Checkbox.displayName = "Checkbox";
