import { Box, BoxProps, cn } from "@unative/universal";

export type RadioWithLabelProps = BoxProps & {};
export const RadioWithLabel = ({
  className,
  children,
  ...props
}: RadioWithLabelProps) => {
  return (
    <Box className={cn("", className)} {...props}>
      {children}
    </Box>
  );
};
