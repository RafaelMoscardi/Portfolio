"use client";

import Link from "next/link";
import ProjectCard from "@/components/ui/ProjectCard";
import SectionHeading from "@/components/ui/SectionHeading";
import { projects } from "@/data/projects";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/data/translations";

export default function ProjectsPageContent() {
  const { lang } = useLanguage();
  const t = translations[lang].projects;

  const activeProjects = projects.filter((p) => p.status === "active");
  const upcomingProjects = projects.filter((p) => p.status === "coming-soon");

  return (
    <div className="min-h-screen pt-16 pb-28 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-6">
          <Link
            href="/"
            className="text-sm text-slate-500 hover:text-slate-700 dark:hover:text-slate-300 font-mono transition-colors"
          >
            {t.back}
          </Link>
        </div>

        <SectionHeading
          label={t.pageLabel}
          title={t.pageTitle}
          description={t.pageDescription}
        />

        {activeProjects.length > 0 && (
          <div className="mt-12">
            <h3 className="text-xs font-mono text-slate-500 uppercase tracking-widest mb-6">
              {t.active}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {activeProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </div>
        )}

        {upcomingProjects.length > 0 && (
          <div className="mt-16">
            <h3 className="text-xs font-mono text-slate-500 uppercase tracking-widest mb-6">
              {t.upcoming}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {upcomingProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
