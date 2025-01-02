import { useContext } from "react";
import { ProviderContext } from "./provider-context";

export const useTheme = () => {
  const context = useContext(ProviderContext);

  if (!context) {
    throw new Error("useTheme must be used within a UnativeProvider");
  }

  return {
    ...context,
  };
};
