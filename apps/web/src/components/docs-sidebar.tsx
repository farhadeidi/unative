"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "unative/lib";

import { docsNavigationLinks } from "@/lib/navigation";

const DocsSidebar = () => {
  const pathname = usePathname();

  return (
    <div className="flex flex-col gap-6 text-sm">
      {docsNavigationLinks.map((group) => {
        return (
          <div key={group.href}>
            <div className="p-2 font-bold">{group.title}</div>
            <div className="flex flex-col gap-1">
              {group.items?.map((link) => {
                const isActive = link.href === pathname;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={cn(
                      "block px-2 py-1 duration-200",
                      isActive
                        ? "font-bold text-primary"
                        : "text-foreground/50 hover:text-foreground",
                    )}
                  >
                    {link.title}
                  </Link>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default DocsSidebar;
