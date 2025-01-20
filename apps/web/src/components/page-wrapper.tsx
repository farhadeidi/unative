import { cn } from "unative/lib/utils";
import type { BoxProps } from "unative/ui/box";
import { Box } from "unative/ui/box";

export type PageWrapperProps = BoxProps & {};
export const PageWrapper = ({
  className,
  children,
  ...props
}: PageWrapperProps) => {
  return (
    <Box className={cn("", className)} {...props}>
      {children}
    </Box>
  );
};
