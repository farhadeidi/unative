import Link from "next/link";
import { Box } from "unative/ui";
import { ThemeOptions } from "@unative/blocks/widgets/theme-options";

import { LogoType } from "@/components/logo";

export default function PublicLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Box
      className="flex min-h-screen flex-col bg-background"
      suppressHydrationWarning
    >
      <header className="flex min-h-16 w-full flex-row items-center px-4">
        <Link href="/">
          <LogoType />
        </Link>
        <div className="flex-1"></div>
        <ThemeOptions />
      </header>
      <main>{children}</main>
    </Box>
  );
}
