import React from "react";

import { cn } from "../../../utils";
import { Box, BoxProps } from "../box/web";
import { TextClassContext } from "../text";

import { FilterTabsVariantProps, filterTabsVariants } from "./variants";

export type FilterTabsProps = BoxProps & FilterTabsVariantProps;
export const FilterTabs = React.forwardRef<HTMLDivElement, FilterTabsProps>(
  ({ className, variant, size, ...props }, ref) => {
    const { base, text } = filterTabsVariants({
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
FilterTabs.displayName = "FilterTabs";
