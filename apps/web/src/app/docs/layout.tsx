import { cn } from "unative/lib/utils";
import { Box, type BoxProps } from "unative/ui/box";

import { Container } from "@/components/container";
import DocsSidebar from "@/components/docs-sidebar";

export type DocsLayoutProps = BoxProps & {};
export const DocsLayout = ({
  className,
  children,
  ...props
}: DocsLayoutProps) => {
  return (
    <Container
      className={cn("flex flex-1 flex-row gap-6 py-8", className)}
      {...props}
    >
      <Box className="w-64">
        <DocsSidebar />
      </Box>

      <Box className="flex flex-1">{children}</Box>
    </Container>
  );
};

export default DocsLayout;
