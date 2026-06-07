"use client";

import Link from "next/link";
import ThemeToggle from "@/components/ui/ThemeToggle";
import LanguageToggle from "@/components/ui/LanguageToggle";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/data/translations";

export default function Navbar() {
  const { lang } = useLanguage();
  const t = translations[lang].nav;

  const navLinks: { label: string; href: string }[] = [
    { label: t.home, href: "/" },
    { label: t.skills, href: "/#skills" },
    { label: t.projects, href: "/#projetos" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-900/95 backdrop-blur-xl border-b border-slate-700/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-14">

        {/* Logo estilo código */}
        <Link href="/" className="font-mono text-sm sm:text-base select-none shrink-0 hover:opacity-80 transition-opacity">
          <span className="text-slate-400">&lt; </span>
          <span className="text-slate-100 font-semibold">Rafael </span>
          <span className="text-cyan-400 font-semibold">Moscardi</span>
          <span className="text-slate-400"> /&gt;</span>
        </Link>

        {/* Links + toggles */}
        <div className="flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-slate-400 hover:text-slate-100 px-3 py-1.5 rounded-lg hover:bg-slate-800/60 transition-all whitespace-nowrap"
            >
              {link.label}
            </Link>
          ))}

          <div className="w-px h-4 bg-slate-700 mx-1 shrink-0" />

          <LanguageToggle />
          <ThemeToggle />
        </div>

      </div>
    </nav>
  );
}
