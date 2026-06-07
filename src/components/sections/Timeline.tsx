"use client";

import SectionHeading from "@/components/ui/SectionHeading";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/data/translations";
import type { TimelineStatus } from "@/data/timeline";

const dotStyles: Record<TimelineStatus, string> = {
  done: "bg-slate-300 border-slate-400 dark:bg-slate-700 dark:border-slate-600",
  current: "bg-cyan-500 border-cyan-400 dark:bg-cyan-400 dark:border-cyan-300 shadow-lg shadow-cyan-400/40",
  next: "bg-transparent border-slate-300 dark:border-slate-700",
};

const contentOpacity: Record<TimelineStatus, string> = {
  done: "opacity-60",
  current: "opacity-100",
  next: "opacity-40",
};

export default function Timeline() {
  const { lang } = useLanguage();
  const t = translations[lang].timeline;

  return (
    <section id="jornada" className="py-16 sm:py-24 px-4 sm:px-6 bg-slate-100/80 dark:bg-slate-950/50">
      <div className="max-w-3xl mx-auto">
        <SectionHeading
          label={t.label}
          title={t.title}
          description={t.description}
        />

        <div className="mt-10 sm:mt-12 relative">
          <div className="absolute left-[5px] top-2 bottom-2 w-px bg-slate-200 dark:bg-slate-800" />

          <div className="space-y-8 sm:space-y-10">
            {t.events.map((event, index) => (
              <div key={index} className="flex gap-4 sm:gap-6">
                <div className="relative flex-shrink-0 mt-1.5 z-10">
                  <div className={`w-3 h-3 rounded-full border-2 ${dotStyles[event.status]}`} />
                </div>

                <div className={`pb-2 min-w-0 ${contentOpacity[event.status]}`}>
                  <span className="text-xs font-mono text-cyan-600/70 dark:text-cyan-400/70 block mb-0.5">
                    {event.year}
                  </span>
                  <h3 className={`font-semibold text-sm sm:text-base ${
                    event.status === "current" ? "text-slate-900 dark:text-slate-100" : "text-slate-700 dark:text-slate-300"
                  }`}>
                    {event.label}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500 mt-1 leading-relaxed">
                    {event.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
