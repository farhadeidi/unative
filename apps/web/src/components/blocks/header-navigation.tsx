"use client";
import { cn } from "unative/lib/utils";
import { Box } from "unative/ui/box";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "unative/ui/navigation-menu";

export interface HeaderNavigationLinkProps {
  label: string;
  href: string;
  isDisabled?: boolean;
  items?: HeaderNavigationLinkProps[];
}

export interface HeaderNavigationProps {
  links: HeaderNavigationLinkProps[];
  isActiveExtractor?: (item: HeaderNavigationLinkProps) => boolean;
  LinkComponent: React.FC<{
    children: React.ReactNode;
    item: HeaderNavigationLinkProps;
    index: number;
  }>;
}

export const HeaderNavigation = ({
  links,
  isActiveExtractor,
  LinkComponent,
}: HeaderNavigationProps) => {
  return (
    <Box className={cn("flex-1")}>
      <NavigationMenu>
        <NavigationMenuList>
          {links.map((item, index) => {
            const isActive = isActiveExtractor?.(item);

            return (
              <NavigationMenuItem value={item.label} key={item.href}>
                <LinkComponent item={item} index={index}>
                  <NavigationMenuLink
                    className={navigationMenuTriggerStyle()}
                    active={isActive}
                  >
                    {item.label}
                  </NavigationMenuLink>
                </LinkComponent>
              </NavigationMenuItem>
            );
          })}
        </NavigationMenuList>
      </NavigationMenu>
    </Box>
  );
};
