import Link from "next/link";

import { LogoType } from "@/components/logo";
import { ThemeSwitch } from "@/components/theme-switch";

export default function PublicLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <header className="flex min-h-16 w-full flex-row items-center px-4">
        <Link href="/">
          <LogoType />
        </Link>
        <div className="flex-1"></div>
        <ThemeSwitch />
      </header>
      <main>{children}</main>
    </div>
  );
}
