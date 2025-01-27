import Link from "next/link";
import { Box } from "unative/ui/box";

// import { ThemeSwitch } from "@/components/blocks/theme-switch";
import { HeaderLinks } from "@/components/header-links";
import { LogoType } from "@/components/logo";

export default function PublicLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Box
      className="flex flex-1 flex-col bg-background"
      suppressHydrationWarning
    >
      <header className="flex min-h-16 w-full flex-row items-center gap-4 px-4">
        <Link href="/">
          <LogoType />
        </Link>
        <div className="flex-1">
          <HeaderLinks />
        </div>
        {/* <ThemeSwitch /> */}
      </header>
      <main>{children}</main>
    </Box>
  );
}
