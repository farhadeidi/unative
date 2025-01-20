import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Views",
};

const Layout = ({ children }: { children: React.ReactNode }) => {
  return <React.Fragment>{children}</React.Fragment>;
};

export default Layout;
