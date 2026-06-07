"use client";

import { createContext, useContext, useState, useEffect } from "react";
import type { Lang } from "@/data/translations";

interface LanguageContextValue {
  lang: Lang;
  toggleLang: () => void;
}

const LanguageContext = createContext<LanguageContextValue>({
  lang: "pt",
  toggleLang: () => {},
});

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Lang>("pt");

  useEffect(() => {
    const saved = localStorage.getItem("lang") as Lang | null;
    if (saved === "pt" || saved === "en") {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setLang(saved);
      document.documentElement.lang = saved === "pt" ? "pt-BR" : "en";
    }
  }, []);

  const toggleLang = () => {
    const next: Lang = lang === "pt" ? "en" : "pt";
    setLang(next);
    localStorage.setItem("lang", next);
    document.documentElement.lang = next === "pt" ? "pt-BR" : "en";
  };

  return (
    <LanguageContext.Provider value={{ lang, toggleLang }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
