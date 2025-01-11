/** @jsxImportSource nativewind */

import React from "react";
import { View } from "react-native";

import { cn } from "../../../utils";
import { Box, BoxProps } from "../box";
import { TextClassContext } from "../text";

import { AlertDialogVariantProps, alertDialogVariants } from "./variants";

export type AlertDialogProps = BoxProps & AlertDialogVariantProps;
export const AlertDialog = React.forwardRef<View, AlertDialogProps>(
  ({ className, variant, size, ...props }, ref) => {
    const { base, text } = alertDialogVariants({
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
AlertDialog.displayName = "AlertDialog";
