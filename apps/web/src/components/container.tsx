import { cn } from "unative/lib/utils";
import type { BoxProps } from "unative/ui/box";
import { Box } from "unative/ui/box";

export type ContainerProps = BoxProps & {};
export const Container = ({
  className,
  children,
  ...props
}: ContainerProps) => {
  return (
    <Box
      className={cn("w-full max-w-7xl mx-auto flex flex-col", className)}
      {...props}
    >
      {children}
    </Box>
  );
};
