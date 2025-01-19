/** @jsxImportSource nativewind */

/**
 * Source code copied and adapted from:
 * https://github.com/roninoss/rn-primitives
 * License: MIT (c) 2024 RoninOSS
 */

import * as React from "react";
import { type GestureResponderEvent, Pressable, View } from "react-native";

import * as Slot from "../shared/slot";

import type { RootProps, RootRef, ThumbProps, ThumbRef } from "./types";

const Root = React.forwardRef<RootRef, RootProps>(
  (
    {
      asChild,
      checked,
      onCheckedChange,
      disabled,
      onPress: onPressProp,
      "aria-valuetext": ariaValueText,
      ...props
    },
    ref,
  ) => {
    function onPress(ev: GestureResponderEvent) {
      if (disabled) return;
      onCheckedChange(!checked);
      onPressProp?.(ev);
    }

    const Component = asChild ? Slot.Pressable : Pressable;
    return (
      <Component
        ref={ref}
        aria-disabled={disabled}
        role="switch"
        aria-checked={checked}
        aria-valuetext={(ariaValueText ?? checked) ? "on" : "off"}
        onPress={onPress}
        accessibilityState={{
          checked,
          disabled,
        }}
        disabled={disabled}
        {...props}
      />
    );
  },
);

Root.displayName = "RootNativeSwitch";

const Thumb = React.forwardRef<ThumbRef, ThumbProps>(
  ({ asChild, ...props }, ref) => {
    const Component = asChild ? Slot.View : View;
    return <Component ref={ref} role="presentation" {...props} />;
  },
);

Thumb.displayName = "ThumbNativeSwitch";

export { Root, Thumb };
