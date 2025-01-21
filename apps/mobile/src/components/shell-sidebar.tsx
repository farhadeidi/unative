import React from "react";
import { Link } from "expo-router";
import { Box, BoxProps } from "unative/ui/box";
import { Button } from "unative/ui/button";
import { Text } from "unative/ui/text";

import { cn } from "@/lib/utils";
import { navigationLinks } from "@/navigation-links";

export type ShellSidebarProps = BoxProps & {};
export const ShellSidebar = ({ className, ...props }: ShellSidebarProps) => {
  return (
    <Box
      className={cn("w-72 border-r border-r-border bg-background", className)}
      {...props}
    >
      <Box className="p-4">
        {/* <LogoType description="React Native Demo" /> */}
      </Box>

      <Box className="flex flex-col gap-4 p-4">
        {navigationLinks.map((parent) => {
          return (
            <Box key={parent.label}>
              <Text className="font-bold mb-1 text-sm text-muted-foreground">
                {parent.label}
              </Text>
              <Box>
                {parent.items?.map((item) => {
                  return (
                    <React.Fragment key={item.href as string}>
                      <Link href={item.href} asChild>
                        <Button
                          variant="unstyled"
                          className="justify-start px-4 py-2 hover:bg-secondary"
                        >
                          <Text className="text-sm">{item.label}</Text>
                        </Button>
                      </Link>
                    </React.Fragment>
                  );
                })}
              </Box>
            </Box>
          );
        })}
      </Box>
    </Box>
  );
};
