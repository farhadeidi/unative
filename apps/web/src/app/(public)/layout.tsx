import React from "react";
import Link from "next/link";
import {
  WebHeader,
  WebHeaderBranding,
  WebHeaderNavigation,
} from "@unative/blocks/sections";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@unative/universal";

import { LogoType } from "@/components/logo";
// import { ThemeSwitch } from "@/components/theme-switch";

// const navigationMenuTriggerStyle = cva(
//   "group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50",
// );

const items = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Components",
    href: "/components",
  },
  {
    label: "Blocks",
    href: "/blocks",
  },
];
export default function PublicLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div
      className="flex min-h-screen flex-col bg-background"
      suppressHydrationWarning
    >
      <WebHeader>
        <WebHeaderBranding>
          <Link href="/">
            <LogoType />
          </Link>
        </WebHeaderBranding>
        <WebHeaderNavigation className="flex-1">
          <NavigationMenu>
            <NavigationMenuList>
              {items.map((item) => {
                return (
                  <NavigationMenuItem key={item.href}>
                    <Link href={item.href} legacyBehavior passHref>
                      <NavigationMenuLink
                        className={navigationMenuTriggerStyle()}
                      >
                        {item.label}
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                );
              })}
            </NavigationMenuList>
          </NavigationMenu>
        </WebHeaderNavigation>
      </WebHeader>

      {/* <header className="flex min-h-16 w-full flex-row items-center px-4">
        <Link href="/">
          <LogoType />
        </Link>
        <div className="flex-1"></div>
        <ThemeSwitch />
      </header> */}
      <main>{children}</main>
    </div>
  );
}
