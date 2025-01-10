import React from "react";
import { Href, Link } from "expo-router";
import { Box, BoxProps, Button, Text } from "unative/components/ui";
import { cn } from "unative/utils";
import { LogoType } from "@repo/shared-ui";

type LinkItem = {
  label: string;
  href: Href;
  items?: LinkItem[];
};

const links: LinkItem[] = [
  {
    label: "Core Components",
    href: "/components",
    items: [
      {
        label: "Buttons",
        href: "/components/buttons-demo",
      },
      {
        label: "Text",
        href: "/components/text-demo",
      },
    ],
  },
  {
    label: "Widgets",
    href: "/widgets",
    items: [
      {
        label: "Theme Switch",
        href: "/widgets/theme-switch-demo",
      },
    ],
  },
];

export type ShellSidebarProps = BoxProps & {};
export const ShellSidebar = ({ className, ...props }: ShellSidebarProps) => {
  return (
    <Box
      className={cn("w-72 border-r border-r-border bg-background", className)}
      {...props}
    >
      <Box className="p-4">
        <LogoType description="React Native Demo" />
      </Box>

      <Box className="flex flex-col gap-4 p-4">
        {links.map((parent) => {
          return (
            <Box key={parent.label}>
              <Text className="mb-1 text-sm font-bold text-muted-foreground">
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
                      {/* <Box className="h-[1px] bg-border" /> */}
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
