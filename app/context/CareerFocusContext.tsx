"use client";
import { createContext, useContext, useState } from "react";
import type { ReactNode } from "react";

export type FocusId = "sysadmin" | "iam" | "infrastructure" | null;

interface CareerFocusCtx {
  activeFocus: FocusId;
  setActiveFocus: (id: FocusId) => void;
}

const CareerFocusContext = createContext<CareerFocusCtx>({
  activeFocus: null,
  setActiveFocus: () => {},
});

export function CareerFocusProvider({ children }: { children: ReactNode }) {
  const [activeFocus, setActiveFocus] = useState<FocusId>(null);
  return (
    <CareerFocusContext.Provider value={{ activeFocus, setActiveFocus }}>
      {children}
    </CareerFocusContext.Provider>
  );
}

export const useCareerFocus = () => useContext(CareerFocusContext);
