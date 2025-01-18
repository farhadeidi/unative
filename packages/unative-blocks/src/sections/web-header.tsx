import React from "react";
import {
  Box,
  BoxProps,
  cn,
  navigationMenuTriggerStyle,
} from "@unative/universal";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@unative/universal/ui/navigation-menu/web";

export type WebHeaderProps = BoxProps & {};
export const WebHeader = ({
  className,
  children,
  ...props
}: WebHeaderProps) => {
  return (
    <Box
      className={cn("flex min-h-16 flex-row items-center px-4", className)}
      {...props}
    >
      {children}
    </Box>
  );
};

export const WebHeaderBranding = ({
  className,
  children,
  ...props
}: WebHeaderProps) => {
  return (
    <Box
      className={cn("flex flex-row items-center px-4", className)}
      {...props}
    >
      {children}
    </Box>
  );
};

export const WebHeaderNavigation = ({
  className,
  children,
  items,
  renderItem = ({ children }) => {
    return <React.Fragment>{children}</React.Fragment>;
  },
  ...props
}: WebHeaderProps & {
  items: { label: string; href: string }[];
  renderItem: (values: {
    item: { label: string; href: string };
    index: number;
    children?: React.ReactNode;
  }) => React.ReactNode;
}) => {
  return (
    <Box
      className={cn("flex flex-row items-center px-4", className)}
      {...props}
    >
      <NavigationMenu>
        <NavigationMenuList>
          {items.map((item, index) => {
            return (
              <React.Fragment key={item.href}>
                <NavigationMenuItem key={item.href}>
                  {renderItem({
                    item,
                    index,
                    children: (
                      <NavigationMenuLink
                        className={navigationMenuTriggerStyle()}
                      >
                        {item.label}
                      </NavigationMenuLink>
                    ),
                  })}
                </NavigationMenuItem>
              </React.Fragment>
            );
          })}
        </NavigationMenuList>
      </NavigationMenu>
    </Box>
  );
};
