import React from "react";

export type ProviderProps = {
  children: React.ReactNode;
};
export const Provider = ({ children }: ProviderProps) => {
  return <React.Fragment>{children}</React.Fragment>;
};
