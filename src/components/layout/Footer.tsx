"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/data/translations";

export default function Footer() {
  const { lang } = useLanguage();
  const t = translations[lang].footer;

  return (
    <footer className="border-t border-slate-200 dark:border-slate-800 mt-0">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 pb-24 sm:pb-28 flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4">
        <div className="text-sm text-slate-500 text-center sm:text-left">
          <span className="font-mono text-cyan-600 dark:text-cyan-400">Rafael Moscardi</span>{" "}
          — {t.role}
        </div>
        <div className="flex items-center gap-4 sm:gap-6">
          <a
            href="https://github.com/RafaelMoscardi"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-slate-500 hover:text-slate-700 dark:hover:text-slate-300 transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/rafaelmoscardi/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-slate-500 hover:text-slate-700 dark:hover:text-slate-300 transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="mailto:rafaelmoscardi07@gmail.com"
            className="text-sm text-slate-500 hover:text-slate-700 dark:hover:text-slate-300 transition-colors"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
