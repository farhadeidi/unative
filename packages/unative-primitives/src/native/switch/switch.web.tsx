/** @jsxImportSource nativewind */

/**
 * Source code copied and adapted from:
 * https://github.com/roninoss/rn-primitives
 * License: MIT (c) 2024 RoninOSS
 */

import * as React from "react";
import { type GestureResponderEvent, Pressable, View } from "react-native";
import * as Switch from "@radix-ui/react-switch";

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
      onKeyDown: onKeyDownProp,
      ...props
    },
    ref,
  ) => {
    function onPress(ev: GestureResponderEvent) {
      onCheckedChange(!checked);
      onPressProp?.(ev);
    }

    function onKeyDown(ev: React.KeyboardEvent) {
      onKeyDownProp?.(ev);
      if (ev.key === " ") {
        onCheckedChange(!checked);
      }
    }

    const Component = asChild ? Slot.Pressable : Pressable;
    return (
      <Switch.Root
        checked={checked}
        onCheckedChange={onCheckedChange}
        disabled={disabled}
        asChild
      >
        <Component
          ref={ref}
          disabled={disabled}
          onPress={onPress}
          // @ts-expect-error Web only
          onKeyDown={onKeyDown}
          {...props}
        />
      </Switch.Root>
    );
  },
);

Root.displayName = "RootWebSwitch";

const Thumb = React.forwardRef<ThumbRef, ThumbProps>(
  ({ asChild, ...props }, ref) => {
    const Component = asChild ? Slot.View : View;
    return (
      <Switch.Thumb asChild>
        <Component ref={ref} {...props} />
      </Switch.Thumb>
    );
  },
);

Thumb.displayName = "ThumbWebSwitch";

export { Root, Thumb };
