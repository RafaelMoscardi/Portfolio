"use client";

import SectionHeading from "@/components/ui/SectionHeading";
import Badge from "@/components/ui/Badge";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/data/translations";

const categoryAccents: Record<string, string> = {
  "Frontend":    "border-t-cyan-400",
  "Backend":     "border-t-violet-500",
  "Ferramentas": "border-t-amber-400",
  "Tools":       "border-t-amber-400",
  "Interesses":  "border-t-emerald-400",
  "Interests":   "border-t-emerald-400",
};

const categoryGlows: Record<string, string> = {
  "Frontend":    "hover:shadow-cyan-500/10",
  "Backend":     "hover:shadow-violet-500/10",
  "Ferramentas": "hover:shadow-amber-400/10",
  "Tools":       "hover:shadow-amber-400/10",
  "Interesses":  "hover:shadow-emerald-400/10",
  "Interests":   "hover:shadow-emerald-400/10",
};

export default function Skills() {
  const { lang } = useLanguage();
  const t = translations[lang].skills;

  return (
    <section id="skills" className="py-16 sm:py-24 px-4 sm:px-6 bg-white dark:bg-transparent">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          label={t.label}
          title={t.title}
          description={t.description}
        />

        <div className="mt-10 sm:mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {t.categories.map((category) => (
            <div
              key={category.name}
              className={`
                bg-white dark:bg-slate-900
                border border-slate-200 dark:border-slate-800
                border-t-2 ${categoryAccents[category.name] ?? "border-t-slate-400"}
                rounded-xl p-4 sm:p-6
                hover:border-slate-300 dark:hover:border-slate-700
                hover:shadow-lg ${categoryGlows[category.name] ?? ""}
                transition-all duration-300
              `}
            >
              <div className="flex items-center gap-2 mb-4">
                <span className="text-xl">{category.icon}</span>
                <h3 className="text-sm font-semibold text-slate-800 dark:text-slate-200">
                  {category.name}
                </h3>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {category.skills.map((skill) => (
                  <Badge key={skill} variant="default">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
