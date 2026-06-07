"use client";

import { useLanguage } from "@/contexts/LanguageContext";

function FlagBR() {
  return (
    <svg width="20" height="14" viewBox="0 0 20 14" xmlns="http://www.w3.org/2000/svg" style={{ borderRadius: 2, display: "block" }}>
      <rect width="20" height="14" fill="#009C3B" />
      <polygon points="10,1.5 18.5,7 10,12.5 1.5,7" fill="#FFDF00" />
      <circle cx="10" cy="7" r="3.2" fill="#002776" />
      <rect x="7.1" y="6.45" width="5.8" height="1.1" fill="white" rx="0.4" />
    </svg>
  );
}

function FlagUS() {
  return (
    <svg width="20" height="14" viewBox="0 0 20 14" xmlns="http://www.w3.org/2000/svg" style={{ borderRadius: 2, display: "block" }}>
      <rect width="20" height="14" fill="#B22234" />
      <rect y="1.07" width="20" height="1.08" fill="white" />
      <rect y="3.23" width="20" height="1.08" fill="white" />
      <rect y="5.38" width="20" height="1.08" fill="white" />
      <rect y="7.54" width="20" height="1.08" fill="white" />
      <rect y="9.69" width="20" height="1.08" fill="white" />
      <rect y="11.85" width="20" height="1.08" fill="white" />
      <rect width="8" height="7.54" fill="#3C3B6E" />
    </svg>
  );
}

export default function LanguageToggle() {
  const { lang, toggleLang } = useLanguage();

  return (
    <button
      onClick={toggleLang}
      aria-label={lang === "pt" ? "Switch to English" : "Mudar para Português"}
      className="flex items-center justify-center hover:bg-slate-100 dark:hover:bg-slate-800 px-2 sm:px-2.5 py-1.5 rounded-xl transition-all shrink-0"
    >
      {lang === "pt" ? <FlagBR /> : <FlagUS />}
    </button>
  );
}
