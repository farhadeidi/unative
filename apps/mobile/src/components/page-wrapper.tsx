import React from "react";
import { Stack } from "expo-router";
import { Platform } from "react-native";
import { Box, Text } from "@unative/universal";

export type PageWrapperProps = {
  children?: React.ReactNode;
  title?: string;
};
export const PageWrapper = ({ children, title }: PageWrapperProps) => {
  if (Platform.OS === "web") {
    document.title = title || "React Native Demo";
  }

  if (Platform.OS === "web") {
    return (
      <Box>
        <Box className="pb-8">
          <Text className="font-bold text-4xl">{title}</Text>
        </Box>
        <Box>{children}</Box>
      </Box>
    );
  }

  return (
    <React.Fragment>
      <Stack.Screen options={{ title }} />
      {children}
    </React.Fragment>
  );
};
