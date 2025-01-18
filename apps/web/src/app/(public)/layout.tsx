import Link from "next/link";
import {
  WebHeader,
  WebHeaderBranding,
  WebHeaderNavigation,
} from "@unative/blocks/sections";
import { ThemeOptions } from "@unative/blocks/widgets/theme-options";

import { LogoType } from "@/components/logo";

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
        <WebHeaderNavigation
          className="flex-1"
          items={[
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
          renderItem={({ item, children }) => {
            return (
              <Link href={item.href} legacyBehavior passHref>
                {children}
              </Link>
            );
          }}
        />
        {/* <ThemeSwitch /> */}
        <ThemeOptions />
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
