"use client";

import { createContext, useContext, useState, ReactNode } from "react";

type ModeType = "enterprise" | "campus";

type ModeContextType = {
  mode: ModeType;
  setMode: (mode: ModeType) => void;
};

const ModeContext = createContext<ModeContextType | undefined>(undefined);

export function ModeProvider({ children }: { children: ReactNode }) {
  const [mode, setMode] = useState<ModeType>("enterprise");

  return (
    <ModeContext.Provider value={{ mode, setMode }}>
      {children}
    </ModeContext.Provider>
  );
}

export function useMode() {
  const context = useContext(ModeContext);
  if (!context) {
    throw new Error("useMode must be used inside ModeProvider");
  }
  return context;
}