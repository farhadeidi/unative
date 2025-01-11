/** @jsxImportSource nativewind */

import React from "react";
import { View } from "react-native";

import { cn } from "../../../utils";
import { Box, BoxProps } from "../box";
import { TextClassContext } from "../text";

import { TabsVariantProps, tabsVariants } from "./variants";

export type TabsProps = BoxProps & TabsVariantProps;
export const Tabs = React.forwardRef<View, TabsProps>(
  ({ className, variant, size, ...props }, ref) => {
    const { base, text } = tabsVariants({
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
Tabs.displayName = "Tabs";
