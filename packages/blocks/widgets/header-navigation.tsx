import {
  Box,
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "unative/ui";

import { cn } from "@/lib/utils";
export type HeaderNavigationLinkProps = {
  label: string;
  href: string;
  isDisabled?: boolean;
  items?: HeaderNavigationLinkProps[];
};

export type HeaderNavigationProps = {
  links: HeaderNavigationLinkProps[];
  isActiveExtractor?: (item: HeaderNavigationLinkProps) => boolean;
  LinkComponent: React.FC<{
    children: React.ReactNode;
    item: HeaderNavigationLinkProps;
    index: number;
  }>;
};

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
