/** @jsxImportSource nativewind */

/**
 * Source code copied and adapted from:
 * https://github.com/roninoss/rn-primitives
 * License: MIT (c) 2024 RoninOSS
 */

import * as React from "react";
import { View } from "react-native";
import * as Progress from "@radix-ui/react-progress";

import * as Slot from "../shared/slot";

import type { IndicatorProps, IndicatorRef, RootProps, RootRef } from "./types";

const ProgressContext = React.createContext<RootProps | null>(null);

const Root = React.forwardRef<RootRef, RootProps>(
  ({ asChild, value, max, getValueLabel, ...props }, ref) => {
    const Component = asChild ? Slot.View : View;
    return (
      <ProgressContext.Provider value={{ value, max }}>
        <Progress.Root
          value={value}
          max={max}
          getValueLabel={getValueLabel}
          asChild
        >
          <Component ref={ref} {...props} />
        </Progress.Root>
      </ProgressContext.Provider>
    );
  },
);

Root.displayName = "RootProgress";

const Indicator = React.forwardRef<IndicatorRef, IndicatorProps>(
  ({ asChild, ...props }, ref) => {
    const Component = asChild ? Slot.View : View;
    return (
      <Progress.Indicator asChild>
        <Component ref={ref} {...props} />
      </Progress.Indicator>
    );
  },
);

Indicator.displayName = "IndicatorProgress";

export { Indicator, Root };
