"use client";

import SectionHeading from "@/components/ui/SectionHeading";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/data/translations";

export default function About() {
  const { lang } = useLanguage();
  const t = translations[lang].about;

  return (
    <section id="sobre" className="py-16 sm:py-24 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-16 items-center">
          <div>
            <SectionHeading
              label={t.label}
              title={t.title}
              description={t.description}
            />
          </div>

          <div className="grid grid-cols-2 gap-3 sm:gap-4">
            {t.highlights.map((item) => (
              <div
                key={item.label}
                className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-3 sm:p-5 hover:border-slate-300 dark:hover:border-slate-700 transition-colors"
              >
                <p className="text-xs font-mono text-slate-500 mb-1 truncate">{item.label}</p>
                <p className="text-base sm:text-lg font-bold text-slate-900 dark:text-slate-100 leading-tight">
                  {item.value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
