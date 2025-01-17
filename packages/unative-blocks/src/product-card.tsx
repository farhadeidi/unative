import { Box, BoxProps, cn } from "@unative/universal";

export type ProductCardProps = BoxProps & {};
export const ProductCard = ({
  className,
  children,
  ...props
}: ProductCardProps) => {
  return (
    <Box className={cn("", className)} {...props}>
      {children}
    </Box>
  );
};
