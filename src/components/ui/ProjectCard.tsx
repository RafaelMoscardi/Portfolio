"use client";

import Link from "next/link";
import Badge from "./Badge";
import type { Project } from "@/data/projects";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/data/translations";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const { lang } = useLanguage();
  const t = translations[lang];
  const isComingSoon = project.status === "coming-soon";
  const hasBadge = project.featured || isComingSoon;

  const projectData = t.projectsData[project.id as keyof typeof t.projectsData];
  const tagline = projectData?.tagline ?? project.tagline;
  const description = projectData?.description ?? project.description;

  return (
    <div
      className={`relative group rounded-xl border p-5 sm:p-6 flex flex-col gap-4 transition-all duration-300 ${
        isComingSoon
          ? "bg-slate-50 dark:bg-slate-900/50 border-slate-200 dark:border-slate-800 opacity-75"
          : "bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 hover:border-cyan-400/60 dark:hover:border-cyan-400/40 hover:shadow-lg hover:shadow-cyan-500/10"
      }`}
    >
      {project.featured && (
        <span className="absolute top-4 right-4 text-xs font-mono text-cyan-600 dark:text-cyan-400 bg-cyan-50 dark:bg-cyan-400/10 border border-cyan-200 dark:border-cyan-400/20 px-2 py-0.5 rounded-full">
          {t.card.featured}
        </span>
      )}
      {isComingSoon && (
        <span className="absolute top-4 right-4 text-xs font-mono text-slate-500 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 px-2 py-0.5 rounded-full whitespace-nowrap">
          {t.card.comingSoon}
        </span>
      )}

      <div className={hasBadge ? "pr-20 sm:pr-24" : ""}>
        <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-slate-100 leading-tight">
          {project.name}
        </h3>
        <p className="text-xs sm:text-sm text-cyan-600 dark:text-cyan-400 font-mono mt-0.5 leading-snug">
          {tagline}
        </p>
      </div>

      <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed flex-1">
        {description}
      </p>

      <div className="flex flex-wrap gap-1.5">
        {project.techs.map((tech) => (
          <Badge key={tech} variant="default">
            {tech}
          </Badge>
        ))}
      </div>

      {!isComingSoon && (
        <div className="flex flex-wrap gap-3 sm:gap-4 pt-2 border-t border-slate-200 dark:border-slate-800">
          {project.caseStudyUrl && (
            <Link
              href={project.caseStudyUrl}
              className="text-sm text-cyan-600 dark:text-cyan-400 hover:text-cyan-700 dark:hover:text-cyan-300 font-medium transition-colors"
            >
              {t.card.caseStudy}
            </Link>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 transition-colors"
            >
              GitHub ↗
            </a>
          )}
          {project.liveUrl && project.liveUrl !== "#" && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 transition-colors"
            >
              {t.card.viewOnline}
            </a>
          )}
        </div>
      )}
    </div>
  );
}
