import React from "react";
import { Box, BoxProps, cn } from "@unative/universal";

export type WebHeaderProps = BoxProps & {};
export const WebHeader = ({
  className,
  children,
  ...props
}: WebHeaderProps) => {
  return (
    <Box
      className={cn("flex min-h-16 flex-row items-center px-4", className)}
      {...props}
    >
      {children}
    </Box>
  );
};

export const WebHeaderBranding = ({
  className,
  children,
  ...props
}: WebHeaderProps) => {
  return (
    <Box
      className={cn("flex flex-row items-center px-4", className)}
      {...props}
    >
      {children}
    </Box>
  );
};

export const WebHeaderNavigation = ({
  className,
  children,
  ...props
}: WebHeaderProps & {}) => {
  return (
    <Box
      className={cn("flex flex-row items-center px-4", className)}
      {...props}
    >
      {children}
    </Box>
  );
};
