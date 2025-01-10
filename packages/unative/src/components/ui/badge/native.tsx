/** @jsxImportSource nativewind */

import { cn } from "../../../utils";
import * as Slot from "../../primitives/slot";
import { SlottableViewProps } from "../../primitives/types";
import { Box } from "../box";
import { TextClassContext } from "../text";

import { BadgeVariantProps, badgeVariants } from "./variants";

export type BadgeProps = SlottableViewProps & BadgeVariantProps;

export function Badge({
  className,
  variant,
  size,
  asChild,
  ...props
}: BadgeProps) {
  const Component = asChild ? Slot.View : Box;
  const { base, text } = badgeVariants({ variant, size });
  return (
    <TextClassContext.Provider value={text()}>
      <Component className={cn(base(), className)} {...props} />
    </TextClassContext.Provider>
  );
}
