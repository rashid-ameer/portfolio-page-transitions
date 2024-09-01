import { createContext, useState } from "react";

// Create a Context for the pathname
export const PathnameContext = createContext<{
  targetPathname: string;
  updatePathname: (path: string) => void;
} | null>(null);

// Provider component
export const PathnameProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [targetPathname, setTargetPathname] = useState("");

  // Function to update the target pathname
  const updatePathname = (path: string) => {
    setTargetPathname(path);
  };

  return (
    <PathnameContext.Provider value={{ targetPathname, updatePathname }}>
      {children}
    </PathnameContext.Provider>
  );
};
