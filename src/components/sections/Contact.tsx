"use client";

import { useState } from "react";
import SectionHeading from "@/components/ui/SectionHeading";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/data/translations";

const EMAIL = "rafaelmoscardi07@gmail.com";

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const { lang } = useLanguage();
  const t = translations[lang].contact;

  const copyEmail = () => {
    navigator.clipboard.writeText(EMAIL);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contato" className="py-16 sm:py-24 px-4 sm:px-6 pb-28 sm:pb-32">
      <div className="max-w-3xl mx-auto text-center">
        <SectionHeading
          label={t.label}
          title={t.title}
          description={t.description}
          centered
        />

        <div className="mt-10 sm:mt-12 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3">
          <button
            onClick={copyEmail}
            className="inline-flex items-center justify-center gap-2 px-4 sm:px-6 py-3 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl text-slate-700 dark:text-slate-300 font-mono text-xs sm:text-sm hover:border-cyan-400/60 dark:hover:border-cyan-400/40 hover:text-cyan-600 dark:hover:text-cyan-400 transition-all min-w-0 overflow-hidden"
          >
            <svg className="w-4 h-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <span className="truncate">{copied ? t.copied : EMAIL}</span>
          </button>

          <a
            href={`mailto:${EMAIL}`}
            className="inline-flex items-center justify-center gap-2 px-4 sm:px-6 py-3 bg-cyan-500 dark:bg-cyan-400 text-white dark:text-slate-950 font-semibold text-sm rounded-xl hover:bg-cyan-600 dark:hover:bg-cyan-300 transition-colors shrink-0"
          >
            {t.send}
          </a>
        </div>

        <div className="mt-8 flex items-center justify-center gap-4 sm:gap-6 flex-wrap">
          <a
            href="https://github.com/RafaelMoscardi"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-500 hover:text-slate-700 dark:hover:text-slate-300 transition-colors text-sm"
          >
            GitHub ↗
          </a>
          <span className="text-slate-300 dark:text-slate-700">·</span>
          <a
            href="https://www.linkedin.com/in/rafaelmoscardi/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-500 hover:text-slate-700 dark:hover:text-slate-300 transition-colors text-sm"
          >
            LinkedIn ↗
          </a>
          <span className="text-slate-300 dark:text-slate-700">·</span>
          <a
            href="/resume.pdf"
            download
            className="text-slate-500 hover:text-slate-700 dark:hover:text-slate-300 transition-colors text-sm"
          >
            {t.resume}
          </a>
        </div>
      </div>
    </section>
  );
}
