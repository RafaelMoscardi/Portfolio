"use client";

import Link from "next/link";
import SectionHeading from "@/components/ui/SectionHeading";
import ProjectCard from "@/components/ui/ProjectCard";
import { projects } from "@/data/projects";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/data/translations";

export default function Projects() {
  const { lang } = useLanguage();
  const t = translations[lang].projects;

  const featured = projects.filter((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

  return (
    <section id="projetos" className="py-16 sm:py-24 px-4 sm:px-6 dark:bg-slate-950/50">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3 sm:gap-4 mb-8 sm:mb-12">
          <SectionHeading label={t.label} title={t.title} />
          <Link
            href="/projects"
            className="text-sm text-cyan-600 dark:text-cyan-400 hover:text-cyan-500 dark:hover:text-cyan-300 font-medium font-mono transition-colors whitespace-nowrap self-start sm:self-auto"
          >
            {t.viewAll}
          </Link>
        </div>

        {/* Featured project — full width */}
        {featured.length > 0 && (
          <div className="mb-6">
            {featured.map((project) => (
              <div
                key={project.id}
                className="relative rounded-2xl border border-cyan-400/20 bg-white dark:bg-slate-900 overflow-hidden"
              >
                {/* Gradient top line */}
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent" />
                {/* Subtle glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-transparent pointer-events-none" />
                <div className="relative">
                  <ProjectCard project={project} />
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Rest in grid */}
        {rest.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {rest.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
