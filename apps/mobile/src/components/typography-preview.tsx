import React from "react";
import { Box, BoxProps, Text } from "@unative/universal";

import { cn } from "@/lib/utils";

export const TypographyPreview = ({
  className,
  text,
  withItalic = false,
  ...props
}: BoxProps & {
  text?: string;
  withItalic?: boolean;
}) => {
  return (
    <Box className={cn("flex flex-col gap-2", className)} {...props}>
      {/* <Text className="text-3xl">{text || "Unstyled"}</Text>
      <Text className="font-normal text-3xl">{text || "Unstyled"}</Text> */}
      {/* 
      <Text className="text-3xl">{text || "Unstyled Italic"}</Text>
      <Text className="font-normal-italic text-3xl">
        {text || "Unstyled Italic"}
      </Text> */}

      <Text className="font-thin text-3xl">{text || "Thin"}</Text>
      {!!withItalic && (
        <Text className="font-thin-italic text-3xl">
          {text || "Thin Italic"}
        </Text>
      )}

      <Text className="font-light text-3xl">{text || "Light"}</Text>
      {!!withItalic && (
        <Text className="font-light-italic text-3xl">
          {text || "Light Italic"}
        </Text>
      )}

      <Text className="font-regular text-3xl">{text || "Normal"}</Text>
      {!!withItalic && (
        <Text className="font-normal-italic text-3xl">
          {text || "Normal Italic"}
        </Text>
      )}

      <Text className="font-medium text-3xl">{text || "Medium"}</Text>
      {!!withItalic && (
        <Text className="font-medium-italic text-3xl">
          {text || "Medium Italic"}
        </Text>
      )}

      <Text className="font-semibold text-3xl">{text || "SemiBold"}</Text>
      {!!withItalic && (
        <Text className="font-semibold-italic text-3xl">
          {text || "SemiBold Italic"}
        </Text>
      )}

      <Text className="font-bold text-3xl">{text || "Bold"}</Text>
      {!!withItalic && (
        <Text className="font-bold-italic text-3xl">
          {text || "Bold Italic"}
        </Text>
      )}

      <Text className="font-extrabold text-3xl">{text || "ExtraBold"}</Text>
      {!!withItalic && (
        <Text className="font-extrabold-italic text-3xl">
          {text || "ExtraBold Italic"}
        </Text>
      )}

      <Text className="font-black text-3xl">{text || "Black"}</Text>
      {!!withItalic && (
        <Text className="font-black-italic text-3xl">
          {text || "Black Italic"}
        </Text>
      )}
    </Box>
  );
};
