import { HeaderNavigationBar } from "@/components/header-navigation-bar";
import Logo from "@/components/logo";
import Link from "next/link";

export const Header = () => {
  return (
    <header className="py-4">
      <div className="flex flex-row items-center gap-4 min-h-16 bg-card rounded-full px-3">
        <Link href="/" className="flex flex-row items-center gap-1">
          <Logo size={42} />
          <h2 className="font-bold">Unative</h2>
        </Link>

        <div className="flex-1">
          <div className="hidden md:flex">
            <HeaderNavigationBar />
          </div>
        </div>
        <div></div>
      </div>
    </header>
  );
};
