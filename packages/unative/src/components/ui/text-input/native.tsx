/** @jsxImportSource nativewind */

import React from "react";
import {
  TextInput as NativeTextInput,
  TextInputProps as NativeTextInputProps,
} from "react-native";

import { cn } from "../../../utils";
import { TextClassContext } from "../text";

import { TextInputVariantProps, textInputVariants } from "./variants";

export type TextInputProps = NativeTextInputProps & TextInputVariantProps;
export const TextInput = React.forwardRef<NativeTextInput, TextInputProps>(
  ({ className, variant, size, placeholderClassName, ...props }, ref) => {
    const { base, text } = textInputVariants({
      variant,
      size,
    });

    return (
      <TextClassContext.Provider value={text()}>
        <NativeTextInput
          ref={ref}
          className={cn(
            base(),
            "native:h-12 native:text-lg native:leading-[1.25] web:flex web:w-full web:py-2 web:ring-offset-background web:focus-visible:outline-none web:focus-visible:ring-2 web:focus-visible:ring-ring web:focus-visible:ring-offset-2 h-10 rounded-md border border-input bg-background px-3 text-base text-foreground file:border-0 file:bg-transparent file:font-medium lg:text-sm",
            props.editable === false && "web:cursor-not-allowed opacity-50",
            className,
          )}
          placeholderClassName={cn(
            "text-muted-foreground",
            placeholderClassName,
          )}
          {...props}
        />
      </TextClassContext.Provider>
    );
  },
);
TextInput.displayName = "TextInput";
