import { useContext } from "react";
import { PathnameContext } from "../context/pathname-context";

// Custom hook to use the Pathname context
export const usePathname = () => {
  const context = useContext(PathnameContext);

  if (!context) {
    throw new Error(
      "usePathname can only be utilized inside Pathname Provider"
    );
  }

  return context;
};
