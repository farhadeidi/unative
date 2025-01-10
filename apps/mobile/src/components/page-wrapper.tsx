import React from "react";
import { Box, Text } from "unative/components/ui";

export type PageWrapperProps = {
  children?: React.ReactNode;
  title?: string;
};
export const PageWrapper = ({ children, title }: PageWrapperProps) => {
  document.title = title || "React Native Demo";

  return (
    <Box>
      <Box className="pb-8">
        <Text className="text-4xl font-bold">{title}</Text>
      </Box>
      <Box>{children}</Box>
    </Box>
  );
};
