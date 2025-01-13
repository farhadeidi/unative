import React from "react";

import { cn } from "../../../utils";
import { Box, BoxProps } from "../box/web";
import { TextClassContext } from "../text";

import { PillVariantProps, pillVariants } from "./variants";

export type PillProps = BoxProps & PillVariantProps;
export const Pill = React.forwardRef<HTMLDivElement, PillProps>(
  ({ className, variant, size, ...props }, ref) => {
    const { base, text } = pillVariants({
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
Pill.displayName = "Pill";
