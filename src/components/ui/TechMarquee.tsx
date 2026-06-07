const techs = [
  "React", "Next.js", "TypeScript", "Node.js", "PostgreSQL",
  "Tailwind CSS", "Prisma", "Git", "Docker", "Supabase",
  "Vercel", "JavaScript", "REST APIs", "GitHub",
];

export default function TechMarquee() {
  const items = [...techs, ...techs];
  return (
    <div className="overflow-hidden border-y border-slate-200 dark:border-slate-800/60 bg-white dark:bg-slate-900/30 py-4">
      <div className="animate-marquee flex gap-6 w-max">
        {items.map((tech, i) => (
          <span
            key={i}
            className="flex items-center gap-2 text-xs font-mono text-slate-400 dark:text-slate-600 uppercase tracking-widest whitespace-nowrap"
          >
            <span className="w-1 h-1 rounded-full bg-cyan-400/50" />
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}
