/** @jsxImportSource nativewind */

/**
 * Source code copied and adapted from:
 * https://github.com/roninoss/rn-primitives
 * License: MIT (c) 2024 RoninOSS
 */

import * as React from "react";
import { type GestureResponderEvent, Pressable } from "react-native";

import * as Slot from "../shared/slot";

import type { RootProps, RootRef } from "./types";

const Root = React.forwardRef<RootRef, RootProps>(
  (
    {
      asChild,
      pressed,
      onPressedChange,
      disabled,
      onPress: onPressProp,
      ...props
    },
    ref,
  ) => {
    function onPress(ev: GestureResponderEvent) {
      if (disabled) return;
      const newValue = !pressed;
      onPressedChange(newValue);
      onPressProp?.(ev);
    }

    const Component = asChild ? Slot.Pressable : Pressable;
    return (
      <Component
        ref={ref}
        aria-disabled={disabled}
        role="switch"
        aria-selected={pressed}
        onPress={onPress}
        accessibilityState={{
          selected: pressed,
          disabled,
        }}
        disabled={disabled}
        {...props}
      />
    );
  },
);

Root.displayName = "RootNativeToggle";

export { Root };
