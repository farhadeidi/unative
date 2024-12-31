import React from "react";
import { cn } from "../../../utils";

export type BoxProps = React.HtmlHTMLAttributes<HTMLDivElement>;
export const Box = ({ ...props }: BoxProps) => {
  return <div {...props} />;
};

export const HStack = ({ className, ...props }: BoxProps) => {
  return <Box className={cn("flex flex-row gap-1", className)} {...props} />;
};

export const VStack = ({ className, ...props }: BoxProps) => {
  return <Box className={cn("flex flex-col gap-1", className)} {...props} />;
};

export const Center = ({ className, ...props }: BoxProps) => {
  return (
    <Box
      className={cn(
        "flex flex-col items-center justify-center gap-1",
        className
      )}
      {...props}
    />
  );
};
