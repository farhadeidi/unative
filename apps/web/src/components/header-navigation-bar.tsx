"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "unative/ui/button";

type NavLink = {
  href: string;
  title: string;
  items?: NavLink[];
};

const items: NavLink[] = [
  {
    href: "/",
    title: "Home",
  },
  {
    href: "/docs",
    title: "Docs",
  },
];

const isRouteActive = (href: string, pathname: string) => {
  if (href === "/") {
    return pathname === "/";
  }

  return pathname.startsWith(href);
};

export const HeaderNavigationBar = () => {
  const pathname = usePathname();
  return (
    <div>
      <nav className="flex-1 flex flex-row items-center gap-1">
        {items.map((link) => {
          const isActive = isRouteActive(link.href, pathname);
          return (
            <Link key={link.href} href={link.href} passHref>
              <Button variant={isActive ? "secondary" : "ghost"}>
                {link.title}
              </Button>
            </Link>
          );
        })}
      </nav>
    </div>
  );
};
