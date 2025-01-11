/** @jsxImportSource nativewind */

import React from "react";
import { View } from "react-native";

import { cn } from "../../../utils";
import { Box, BoxProps } from "../box";
import { TextClassContext } from "../text";

import { AccordionVariantProps, accordionVariants } from "./variants";

export type AccordionProps = BoxProps & AccordionVariantProps;
export const Accordion = React.forwardRef<View, AccordionProps>(
  ({ className, variant, size, ...props }, ref) => {
    const { base, text } = accordionVariants({
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
Accordion.displayName = "Accordion";
