import "./globals.css";

import type { Metadata } from "next";
import { Geist, Geist_Mono, Open_Sans } from "next/font/google";
import Link from "next/link";
import { Provider as UnativeProvider } from "unative/provider";

import { THEMES } from "@/lib/unative/themes";
import { Container } from "@/components/container";
import { HeaderLinks } from "@/components/header-links";
import { LogoType } from "@/components/logo";
import { ThemeSwitch } from "@/components/theme-switch";
import { appConstants } from "@/app.constants";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const other = Open_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    template: `%s | ${appConstants.META_TITLE}`,
    default: `${appConstants.META_TITLE} | ${appConstants.META_DESCRIPTION}`,
  },
  description: appConstants.META_DESCRIPTION,
  generator: "Next.js",
  applicationName: appConstants.META_TITLE,
  referrer: "origin-when-cross-origin",
  keywords: ["Next.js", "React", "JavaScript"],
  authors: [{ name: "Farhad Eidi", url: "https://github.com/farhadeidi" }],
  creator: "Farhad Eidi",
  publisher: "Farhad Eidi",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
};

export const goodFonts = ["AR_One_Sans", "Ubuntu_Sans"];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className="overflow-y-scroll scroll-smooth"
    >
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${other.variable} antialiased`}
        style={{
          fontFamily: "var(--font-sans)",
        }}
      >
        <UnativeProvider themes={THEMES}>
          <Container className="flex min-h-screen flex-col bg-background">
            <header className="flex min-h-16 w-full flex-row items-center gap-4 px-4">
              <Link href="/">
                <LogoType />
              </Link>
              <div className="flex-1">
                <HeaderLinks />
              </div>
              <ThemeSwitch />
            </header>
            <div className="flex flex-1 flex-col">{children}</div>
          </Container>
        </UnativeProvider>
      </body>
    </html>
  );
}
