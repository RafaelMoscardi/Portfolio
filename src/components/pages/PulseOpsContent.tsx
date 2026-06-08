"use client";

import Link from "next/link";
import Badge from "@/components/ui/Badge";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/data/translations";

const techs = ["Next.js", "TypeScript", "PostgreSQL", "Prisma", "Recharts", "Webhooks"];

export default function PulseOpsContent() {
  const { lang } = useLanguage();
  const t = translations[lang].pulseops;

  return (
    <div className="min-h-screen pt-16 pb-28 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-slate-500 font-mono mb-8">
          <Link href="/" className="hover:text-slate-700 dark:hover:text-slate-300 transition-colors">
            {t.home}
          </Link>
          <span>/</span>
          <Link href="/projects" className="hover:text-slate-700 dark:hover:text-slate-300 transition-colors">
            {t.projectsLink}
          </Link>
          <span>/</span>
          <span className="text-cyan-600 dark:text-cyan-400">pulseops</span>
        </div>

        {/* Header */}
        <div className="mb-10">
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="text-xs font-mono text-cyan-700 dark:text-cyan-400 bg-cyan-50 dark:bg-cyan-400/10 border border-cyan-200 dark:border-cyan-400/20 px-2.5 py-1 rounded-full">
              {t.caseStudyBadge}
            </span>
            <span className="text-xs font-mono text-green-700 dark:text-green-400 bg-green-50 dark:bg-green-400/10 border border-green-200 dark:border-green-400/20 px-2.5 py-1 rounded-full">
              {t.inDevBadge}
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-slate-100 mb-3">
            PulseOps
          </h1>
          <p className="text-lg text-cyan-600 dark:text-cyan-400 font-mono mb-6">
            {t.tagline}
          </p>
          <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed">
            {t.description}
          </p>
        </div>

        {/* Tech stack */}
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-6 mb-8">
          <h2 className="text-xs font-mono text-slate-500 uppercase tracking-widest mb-4">
            {t.stackLabel}
          </h2>
          <div className="flex flex-wrap gap-2">
            {techs.map((tech) => (
              <Badge key={tech} variant="cyan">
                {tech}
              </Badge>
            ))}
          </div>
        </div>

        {/* Action buttons */}
        <div className="flex flex-wrap gap-3 mb-16">
          <a
            href="https://github.com/RafaelMoscardi/PulseOps"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 font-medium text-sm rounded-lg hover:border-slate-400 dark:hover:border-slate-600 hover:text-slate-900 dark:hover:text-slate-100 transition-all"
          >
            {t.viewCode}
          </a>
          <a
            href="https://pulse-ops-beta.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-cyan-500 text-white font-semibold text-sm rounded-lg hover:bg-cyan-400 transition-colors"
          >
            {t.viewDemo}
          </a>
        </div>

        <div className="h-px bg-slate-200 dark:bg-slate-800 mb-16" />

        {/* 01. Problem */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4">
            <span className="text-cyan-600 dark:text-cyan-400 font-mono text-lg mr-3">{t.problem.num}</span>
            {t.problem.title}
          </h2>
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-6">
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">{t.problem.text}</p>
          </div>
        </section>

        {/* 02. Features */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-6">
            <span className="text-cyan-600 dark:text-cyan-400 font-mono text-lg mr-3">{t.features.num}</span>
            {t.features.title}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {t.features.items.map((feature) => (
              <div
                key={feature.title}
                className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-5 hover:border-slate-300 dark:hover:border-slate-700 transition-colors"
              >
                <h3 className="font-semibold text-slate-800 dark:text-slate-200 mb-1.5 flex items-start gap-2">
                  <span className="text-cyan-600 dark:text-cyan-400 mt-0.5 shrink-0">→</span>
                  {feature.title}
                </h3>
                <p className="text-sm text-slate-500 leading-relaxed pl-5">{feature.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 03. Architecture */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-6">
            <span className="text-cyan-600 dark:text-cyan-400 font-mono text-lg mr-3">{t.architecture.num}</span>
            {t.architecture.title}
          </h2>
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-6">
            <div className="font-mono text-sm text-slate-600 dark:text-slate-400 space-y-3">
              {t.architecture.rows.map((row) => (
                <div key={row.label} className="flex items-start gap-3">
                  <span className="text-cyan-600 dark:text-cyan-400 w-20 shrink-0">{row.label}</span>
                  <span className="text-slate-400 dark:text-slate-600">→</span>
                  <span>{row.value}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 04. Interface */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-6">
            <span className="text-cyan-600 dark:text-cyan-400 font-mono text-lg mr-3">{t.interface.num}</span>
            {t.interface.title}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              "/screenshots/pulseops-dashboard.png",
              "/screenshots/pulseops-services.png",
              "/screenshots/pulseops-incidents.png",
              "/screenshots/pulseops-notifications.png",
            ].map((src, i) => (
              <div
                key={src}
                className="bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl overflow-hidden"
              >
                <img
                  src={src}
                  alt={t.interface.screenshots[i]}
                  className="w-full aspect-video object-cover object-top"
                />
                <p className="text-xs font-mono text-slate-500 px-3 py-2">{t.interface.screenshots[i]}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 05. Challenges */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-6">
            <span className="text-cyan-600 dark:text-cyan-400 font-mono text-lg mr-3">{t.challenges.num}</span>
            {t.challenges.title}
          </h2>
          <div className="space-y-4">
            {t.challenges.items.map((challenge) => (
              <div
                key={challenge.title}
                className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-6 hover:border-slate-300 dark:hover:border-slate-700 transition-colors"
              >
                <h3 className="font-semibold text-slate-800 dark:text-slate-200 mb-2">{challenge.title}</h3>
                <p className="text-sm text-slate-500 mb-4 leading-relaxed">{challenge.description}</p>
                <div className="flex items-start gap-3">
                  <span className="text-xs font-mono text-cyan-700 dark:text-cyan-400 bg-cyan-50 dark:bg-cyan-400/10 border border-cyan-200 dark:border-cyan-400/20 px-2 py-0.5 rounded shrink-0 mt-0.5">
                    {t.challenges.solutionLabel}
                  </span>
                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{challenge.solution}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 06. Learnings */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-6">
            <span className="text-cyan-600 dark:text-cyan-400 font-mono text-lg mr-3">{t.learnings.num}</span>
            {t.learnings.title}
          </h2>
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-6">
            <ul className="space-y-3">
              {t.learnings.items.map((learning) => (
                <li key={learning} className="flex items-start gap-3 text-slate-600 dark:text-slate-400 text-sm">
                  <span className="text-cyan-600 dark:text-cyan-400 mt-0.5 shrink-0">✓</span>
                  {learning}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* 07. Next steps */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-6">
            <span className="text-cyan-600 dark:text-cyan-400 font-mono text-lg mr-3">{t.nextSteps.num}</span>
            {t.nextSteps.title}
          </h2>
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-6">
            <ul className="space-y-3">
              {t.nextSteps.items.map((step) => (
                <li key={step} className="flex items-start gap-3 text-slate-600 dark:text-slate-400 text-sm">
                  <span className="text-violet-600 dark:text-violet-400 mt-0.5 shrink-0">→</span>
                  {step}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Footer actions */}
        <div className="flex flex-wrap items-center gap-4 pt-8 border-t border-slate-200 dark:border-slate-800">
          <a
            href="https://github.com/RafaelMoscardi/PulseOps"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 font-semibold text-sm rounded-lg hover:border-slate-400 dark:hover:border-slate-600 transition-colors"
          >
            {t.viewCode}
          </a>
          <a
            href="https://pulse-ops-beta.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-cyan-500 text-white font-semibold text-sm rounded-lg hover:bg-cyan-400 transition-colors"
          >
            {t.viewDemo}
          </a>
          <Link
            href="/projects"
            className="text-sm text-slate-500 hover:text-slate-700 dark:hover:text-slate-300 transition-colors"
          >
            {t.allProjects}
          </Link>
        </div>
      </div>
    </div>
  );
}
