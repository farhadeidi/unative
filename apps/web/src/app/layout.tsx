import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import ClientProviders from "@/app/providers";
import { ThemeSwitch } from "unative/ui/m/theme-switch";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ClientProviders>
          <div className="min-h-screen flex flex-col">
            <header className="w-full px-4 max-w-5xl mx-auto flex flex-row items-center min-h-16">
              <h2 className="font-bold text-2xl">Unative</h2>
              <div className="flex-1"></div>
              <ThemeSwitch />
            </header>
            <main>{children}</main>
          </div>
        </ClientProviders>
      </body>
    </html>
  );
}
