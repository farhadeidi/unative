"use client";

import React from "react";
import { Provider as UnativeProvider } from "unative/core";

import { THEMES } from "@/lib/unative/themes";

export type ClientProvidersProps = { children: React.ReactNode };
const ClientProviders = ({ children }: ClientProvidersProps) => {
  return <UnativeProvider themes={THEMES}>{children}</UnativeProvider>;
};

export default ClientProviders;
