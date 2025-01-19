/** @jsxImportSource nativewind */

/**
 * Source code copied and adapted from:
 * https://github.com/roninoss/rn-primitives
 * License: MIT (c) 2024 RoninOSS
 */

import * as React from "react";
import { type GestureResponderEvent, Pressable } from "react-native";
import * as Toggle from "@radix-ui/react-toggle";

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
      onPressProp?.(ev);
      onPressedChange(!pressed);
    }

    const Component = asChild ? Slot.Pressable : Pressable;
    return (
      <Toggle.Root
        pressed={pressed}
        onPressedChange={onPressedChange}
        disabled={disabled}
        asChild
      >
        <Component
          ref={ref}
          onPress={onPress}
          disabled={disabled}
          role="button"
          {...props}
        />
      </Toggle.Root>
    );
  },
);

Root.displayName = "RootWebToggle";

export { Root };
