import React from "react";
import { capitalize } from "remeda";
import { cn } from "unative/lib/utils";
import type { BoxProps } from "unative/ui/box";
import { Box } from "unative/ui/box";
import { Text } from "unative/ui/text";

export type SimpleBreadcrumbProps = BoxProps & {
  items: string[];
};
export const SimpleBreadcrumb = ({
  className,
  children,
  items,
  ...props
}: SimpleBreadcrumbProps) => {
  return (
    <Box className={cn("flex flex-row gap-2", className)} {...props}>
      {["unative", ...items].map((item, index) => {
        const isLastItem = index === items.length;
        const withSeparator = index < items.length - 1;

        if (isLastItem) return null;

        return (
          <React.Fragment key={item}>
            <Box>
              <Text className={"text-sm text-muted-foreground"}>
                {capitalize(item)}
              </Text>
            </Box>
            {!!withSeparator && (
              <Text className="text-muted-foreground">/</Text>
            )}
          </React.Fragment>
        );
      })}
    </Box>
  );
};
