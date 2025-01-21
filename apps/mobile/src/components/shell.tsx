import { Platform } from "react-native";
import { Box } from "unative/ui/box";

import { ShellSidebar } from "@/components/shell-sidebar";

export type ShellProps = {
  children?: React.ReactNode;
};
export const Shell = ({ children }: ShellProps) => {
  if (Platform.OS === "web") {
    return (
      <Box className="min-h-screen flex-1 flex-row">
        <ShellSidebar />
        <Box className="flex-1 px-8 py-4">
          <Box>{children}</Box>
        </Box>
      </Box>
    );
  }

  return <Box className="flex flex-1 flex-col">{children}</Box>;
};
