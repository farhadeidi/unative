/** @jsxImportSource nativewind */

import React from "react";
import { View } from "react-native";

import { cn } from "../../../utils";
import { Box, BoxProps } from "../box";
import { TextClassContext } from "../text";

import * as TabsPrimitive from "./primitives";
import { TabsVariantProps, tabsVariants } from "./variants";

const Tabs = TabsPrimitive.Root;

const TabsList = React.forwardRef<
  TabsPrimitive.ListRef,
  TabsPrimitive.ListProps
>(({ className, ...props }, ref) => (
  <TabsPrimitive.List
    ref={ref}
    className={cn(
      "web:inline-flex native:h-12 native:px-1.5 h-10 items-center justify-center rounded-md bg-muted p-1",
      className,
    )}
    {...props}
  />
));
TabsList.displayName = TabsPrimitive.List.displayName;

const TabsTrigger = React.forwardRef<
  TabsPrimitive.TriggerRef,
  TabsPrimitive.TriggerProps
>(({ className, ...props }, ref) => {
  const { value } = TabsPrimitive.useRootContext();
  return (
    <TextClassContext.Provider
      value={cn(
        "text-sm native:text-base font-medium text-muted-foreground web:transition-all",
        value === props.value && "text-foreground",
      )}
    >
      <TabsPrimitive.Trigger
        ref={ref}
        className={cn(
          "web:whitespace-nowrap web:ring-offset-background web:transition-all web:focus-visible:outline-none web:focus-visible:ring-2 web:focus-visible:ring-ring web:focus-visible:ring-offset-2 inline-flex items-center justify-center rounded-sm px-3 py-1.5 text-sm font-medium shadow-none",
          props.disabled && "web:pointer-events-none opacity-50",
          props.value === value &&
            "bg-background shadow-lg shadow-foreground/10",
          className,
        )}
        {...props}
      />
    </TextClassContext.Provider>
  );
});
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName;

const TabsContent = React.forwardRef<
  TabsPrimitive.ContentRef,
  TabsPrimitive.ContentProps
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Content
    ref={ref}
    className={cn(
      "web:ring-offset-background web:focus-visible:outline-none web:focus-visible:ring-2 web:focus-visible:ring-ring web:focus-visible:ring-offset-2",
      className,
    )}
    {...props}
  />
));
TabsContent.displayName = TabsPrimitive.Content.displayName;

export type TabsProps = BoxProps & TabsVariantProps;
export const TabsDefault = React.forwardRef<View, TabsProps>(
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
TabsDefault.displayName = "TabsDefault";

export { Tabs, TabsContent, TabsList, TabsTrigger };
