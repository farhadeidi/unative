import React from "react";

import { cn } from "../../../utils";
import { Box, BoxProps } from "../box/web";
import { TextClassContext } from "../text";

import { ToggleVariantProps, toggleVariants } from "./variants";

export type ToggleProps = BoxProps & ToggleVariantProps;
export const Toggle = React.forwardRef<HTMLDivElement, ToggleProps>(
  ({ className, variant, size, ...props }, ref) => {
    const { base, text } = toggleVariants({
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
Toggle.displayName = "Toggle";
