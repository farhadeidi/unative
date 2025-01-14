import React from "react";
import {
  TextInput as NativeTextInput,
  TextInputProps as NativeTextInputProps,
} from "react-native";
import { tv, VariantProps } from "tailwind-variants";

import { cn } from "@/lib/utils";
import { TextClassContext } from "@/components/ui/text";

export const textInputVariants = tv({
  slots: {
    base: "",
    text: "",
  },
  variants: {
    variant: {
      default: {
        base: "",
        text: "",
      },
    },
    size: {
      default: {
        base: "",
        text: "",
      },
    },
  },
  defaultVariants: {
    variant: "default",
    size: "default",
  },
});

export type TextInputVariantProps = VariantProps<typeof textInputVariants>;

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
            "native:h-12 native:text-lg native:leading-[1.25] h-10 rounded-md border border-input bg-background px-3 text-base text-foreground file:font-medium file:border-0 file:bg-transparent web:flex web:w-full web:py-2 web:ring-offset-background web:focus-visible:outline-none web:focus-visible:ring-2 web:focus-visible:ring-ring web:focus-visible:ring-offset-2 lg:text-sm",
            props.editable === false && "opacity-50 web:cursor-not-allowed",
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
