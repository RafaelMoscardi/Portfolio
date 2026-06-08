"use client";

import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/data/translations";

const coreStack = ["React", "Next.js", "TypeScript", "Node.js", "PostgreSQL", "Tailwind"];

function GitHubIcon() {
  return (
    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

export default function Hero() {
  const { lang } = useLanguage();
  const t = translations[lang].hero;

  return (
    <section className="relative min-h-screen flex items-center px-4 sm:px-8 lg:px-16 pb-24 pt-14 overflow-hidden">

      {/* Background glows — subtle in dark, hidden in light */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 -left-32 w-[500px] h-[500px] dark:bg-cyan-500/8 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-[400px] h-[400px] dark:bg-violet-500/8 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">

        {/* LEFT */}
        <div>
          <div className="mb-8 animate-fade-up">
            <span className="inline-flex items-center gap-2 text-xs font-mono text-slate-600 dark:text-slate-400 bg-slate-100 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-700/60 px-4 py-2 rounded-full">
              <span className="w-1.5 h-1.5 rounded-full bg-green-500 dark:bg-green-400 animate-pulse shrink-0" />
              {t.badge}
            </span>
          </div>

          <h1 className="font-black tracking-tight leading-none mb-6 animate-fade-up-delay-1">
            <span className="block text-5xl sm:text-7xl lg:text-8xl text-slate-900 dark:text-slate-100">Rafael</span>
            <span className="block text-5xl sm:text-7xl lg:text-8xl bg-gradient-to-r from-cyan-500 to-cyan-400 dark:from-cyan-400 dark:to-cyan-300 bg-clip-text text-transparent">
              Moscardi.
            </span>
          </h1>

          <div className="flex items-center gap-3 mb-6 animate-fade-up-delay-2">
            <div className="w-8 h-0.5 bg-cyan-500 dark:bg-cyan-400 shrink-0" />
            <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base font-medium">{t.roleLabel}</p>
          </div>

          <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg leading-relaxed max-w-lg mb-10 animate-fade-up-delay-2">
            {t.description}
          </p>

          <div className="flex flex-wrap gap-3 animate-fade-up-delay-3">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-cyan-500 text-white font-semibold text-sm rounded-xl hover:bg-cyan-400 transition-all hover:shadow-lg hover:shadow-cyan-500/25"
            >
              {t.viewProjects} →
            </Link>
            <a
              href="https://github.com/RafaelMoscardi"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-medium text-sm rounded-xl border border-slate-300 dark:border-slate-700 hover:border-slate-400 dark:hover:border-slate-500 hover:text-slate-900 dark:hover:text-slate-100 transition-all"
            >
              <GitHubIcon /> GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/rafaelmoscardi/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-medium text-sm rounded-xl border border-slate-300 dark:border-slate-700 hover:border-slate-400 dark:hover:border-slate-500 hover:text-slate-900 dark:hover:text-slate-100 transition-all"
            >
              <LinkedInIcon /> LinkedIn
            </a>
          </div>
        </div>

        {/* RIGHT: cards */}
        <div className="hidden lg:grid grid-cols-2 gap-3 animate-fade-up-delay-4">

          {/* Profile */}
          <div className="bg-slate-50 dark:bg-slate-900/70 border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 rounded-2xl p-4 flex items-center gap-3 backdrop-blur-sm transition-colors">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-500/20 to-violet-500/20 border border-cyan-500/30 flex items-center justify-center shrink-0">
              <span className="font-mono font-bold text-sm text-cyan-600 dark:text-cyan-400">RM</span>
            </div>
            <div className="min-w-0">
              <p className="font-bold text-slate-900 dark:text-slate-100 text-sm leading-tight">Rafael Moscardi</p>
              <p className="text-cyan-600 dark:text-cyan-400 text-xs font-mono mt-0.5">{t.profileRole}</p>
              <p className="text-slate-500 text-xs mt-0.5">📍 {t.profileLocation}</p>
            </div>
          </div>

          {/* Currently Building */}
          <div className="bg-slate-50 dark:bg-slate-900/70 border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 rounded-2xl p-4 backdrop-blur-sm transition-colors">
            <p className="text-xs font-mono text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-3 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-green-500 dark:bg-green-400 animate-pulse shrink-0" />
              {t.currentlyBuilding}
            </p>
            <ul className="space-y-1.5">
              <li className="text-xs font-mono flex items-center gap-2">
                <span className="text-green-500 dark:text-green-400">→</span>
                <a
                  href="https://pulse-ops-beta.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-600 dark:text-green-400 hover:text-green-500 dark:hover:text-green-300 transition-colors"
                >
                  PulseOps <span className="text-green-500/70 dark:text-green-500/60">(live)</span>
                </a>
              </li>
              <li className="text-slate-700 dark:text-slate-300 text-xs font-mono flex items-center gap-2">
                <span className="text-cyan-500 dark:text-cyan-400">→</span> DevMatch AI
              </li>
              <li className="text-slate-700 dark:text-slate-300 text-xs font-mono flex items-center gap-2">
                <span className="text-cyan-500 dark:text-cyan-400">→</span> CondoHub
              </li>
            </ul>
          </div>

          {/* Core Stack */}
          <div className="bg-slate-50 dark:bg-slate-900/70 border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 rounded-2xl p-4 backdrop-blur-sm transition-colors">
            <p className="text-xs font-mono text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-3">
              ⬡ {t.coreStack}
            </p>
            <div className="flex flex-wrap gap-1.5">
              {coreStack.map((tech) => (
                <span
                  key={tech}
                  className="text-xs font-mono bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700/80 px-2 py-0.5 rounded-md hover:border-cyan-400/60 hover:text-cyan-600 dark:hover:text-cyan-300 transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Code editor */}
          <div className="bg-slate-100 dark:bg-[#0d1117] border border-slate-200 dark:border-slate-800 rounded-2xl overflow-hidden">
            <div className="flex items-center gap-1.5 px-3 py-2 bg-white dark:bg-slate-900/80 border-b border-slate-200 dark:border-slate-800">
              <span className="w-2.5 h-2.5 rounded-full bg-red-400 dark:bg-red-500/70" />
              <span className="w-2.5 h-2.5 rounded-full bg-yellow-400 dark:bg-yellow-500/70" />
              <span className="w-2.5 h-2.5 rounded-full bg-green-400 dark:bg-green-500/70" />
              <span className="ml-2 text-xs font-mono text-slate-400 dark:text-slate-500">developer.config.ts</span>
            </div>
            <div className="p-3 font-mono text-xs leading-relaxed select-none">
              <div className="text-slate-400 dark:text-slate-600">{'// developer.config.ts'}</div>
              <div className="mt-1">
                <span className="text-blue-600 dark:text-blue-400">const </span>
                <span className="text-slate-700 dark:text-slate-300">developer </span>
                <span className="text-slate-400 dark:text-slate-500">= {"{"}</span>
              </div>
              <div className="pl-3 text-slate-500 dark:text-slate-400">
                <span className="text-cyan-600 dark:text-cyan-300">name</span>
                <span className="text-slate-400 dark:text-slate-500">: </span>
                <span className="text-emerald-600 dark:text-emerald-300">&quot;Rafael Moscardi&quot;</span>
                <span className="text-slate-400 dark:text-slate-500">,</span>
              </div>
              <div className="pl-3 text-slate-500 dark:text-slate-400">
                <span className="text-cyan-600 dark:text-cyan-300">role</span>
                <span className="text-slate-400 dark:text-slate-500">: </span>
                <span className="text-emerald-600 dark:text-emerald-300">&quot;Full Stack Dev&quot;</span>
                <span className="text-slate-400 dark:text-slate-500">,</span>
              </div>
              <div className="pl-3 text-slate-500 dark:text-slate-400">
                <span className="text-cyan-600 dark:text-cyan-300">stack</span>
                <span className="text-slate-400 dark:text-slate-500">: [</span>
                <span className="text-emerald-600 dark:text-emerald-300">&quot;React&quot;</span>
                <span className="text-slate-400 dark:text-slate-500">, </span>
                <span className="text-emerald-600 dark:text-emerald-300">&quot;Next.js&quot;</span>
                <span className="text-slate-400 dark:text-slate-500">],</span>
              </div>
              <div className="pl-3 text-slate-500 dark:text-slate-400">
                <span className="text-cyan-600 dark:text-cyan-300">available</span>
                <span className="text-slate-400 dark:text-slate-500">: </span>
                <span className="text-orange-500 dark:text-orange-300">true</span>
              </div>
              <div><span className="text-slate-400 dark:text-slate-500">{"}"}</span></div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
