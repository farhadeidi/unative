"use client";

import { useContext } from "react";
import { ProviderContext } from "../context/provider-context";

export const useTheme = () => {
  const context = useContext(ProviderContext);

  if (!context) {
    throw new Error("useTheme must be used within a UnativeProvider");
  }

  return {
    ...context,
  };
};
