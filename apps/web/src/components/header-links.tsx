"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { HeaderNavigation } from "@/components/header-navigation";

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
        isActiveExtractor={(item) => {
          if (item.href === "/") {
            return pathname === "/";
          }
          return pathname.startsWith(item.href);
        }}
        links={[
          {
            label: "Home",
            href: "/",
          },
          {
            label: "Docs",
            href: "/docs",
          },
        ]}
      />
    </div>
  );
};
