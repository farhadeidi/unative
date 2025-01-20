"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { HeaderNavigation } from "@/components/blocks/header-navigation";

export const HeaderLinks = () => {
  const pathname = usePathname();

  return (
    <div className="flex-1">
      <HeaderNavigation
        LinkComponent={({ children, item }) => {
          return (
            <Link href={item.href} legacyBehavior passHref>
              {children}
            </Link>
          );
        }}
        isActiveExtractor={(item) => item.href === pathname}
        links={[
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
        ]}
      />
    </div>
  );
};
