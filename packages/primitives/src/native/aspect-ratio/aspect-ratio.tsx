/** @jsxImportSource nativewind */

/**
 * Source code copied and adapted from:
 * https://github.com/roninoss/rn-primitives
 * License: MIT (c) 2024 RoninOSS
 */

import * as React from "react";
import { View, type ViewStyle } from "react-native";

import * as Slot from "../shared/slot";
import type { SlottableViewProps, ViewRef } from "../shared/types";

type RootProps = Omit<SlottableViewProps, "style"> & {
  ratio?: number;
  style?: ViewStyle;
};

type RootRef = ViewRef;

const Root = React.forwardRef<RootRef, RootProps>(
  ({ asChild, ratio = 1, style, ...props }, ref) => {
    const Component = asChild ? Slot.View : View;
    return (
      <Component ref={ref} style={[style, { aspectRatio: ratio }]} {...props} />
    );
  },
);

Root.displayName = "RootAspectRatio";

export { Root };
export type { RootProps, RootRef };
