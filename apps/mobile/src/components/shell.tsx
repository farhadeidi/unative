import { Box } from "unative/components/ui";

import { ShellSidebar } from "@/components/shell-sidebar";

export type ShellProps = {
  children?: React.ReactNode;
};
export const Shell = ({ children }: ShellProps) => {
  return (
    <Box className="min-h-screen flex-1 flex-row">
      <ShellSidebar />
      <Box className="flex-1 px-8 py-4">
        <Box>{children}</Box>
      </Box>
    </Box>
  );
};
