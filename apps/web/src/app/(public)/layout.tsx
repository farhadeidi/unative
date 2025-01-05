import { ThemeSwitch } from "unative/widgets/theme-switch";

export default function PublicLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <header className="w-full px-4 flex flex-row items-center min-h-16">
        <h2 className="font-bold text-2xl">Unative</h2>
        <div className="flex-1"></div>
        <ThemeSwitch />
      </header>
      <main>{children}</main>
    </div>
  );
}
