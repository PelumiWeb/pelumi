"use client";
// scrollContext.tsx
import React, { createContext, useContext, useRef } from "react";

type ScrollRefs = { [key: string]: HTMLElement | null };

type ScrollContextType = {
  setScrollRef: (key: string, ref: HTMLElement | null) => void;
  scrollToElement: (key: string) => void;
};

const ScrollContext = createContext<ScrollContextType | undefined>(undefined);

export const ScrollProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const scrollRefs = useRef<ScrollRefs>({});

  const setScrollRef = (key: string, ref: HTMLElement | null) => {
    scrollRefs.current[key] = ref;
  };

  const scrollToElement = (key: string) => {
    const targetRef = scrollRefs.current[key];
    if (targetRef) {
      targetRef.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <ScrollContext.Provider value={{ setScrollRef, scrollToElement }}>
      {children}
    </ScrollContext.Provider>
  );
};

export const useScrollContext = (): ScrollContextType => {
  const context = useContext(ScrollContext);
  if (!context) {
    throw new Error("useScrollContext must be used within a ScrollProvider");
  }
  return context;
};
