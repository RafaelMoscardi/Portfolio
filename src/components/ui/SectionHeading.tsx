interface SectionHeadingProps {
  label: string;
  title: string;
  description?: string;
  centered?: boolean;
}

export default function SectionHeading({
  label,
  title,
  description,
  centered = false,
}: SectionHeadingProps) {
  return (
    <div className={centered ? "text-center" : ""}>
      <span className="text-xs font-mono text-cyan-600 dark:text-cyan-400 uppercase tracking-widest">
        {label}
      </span>
      <h2 className="mt-2 text-3xl font-bold text-slate-900 dark:text-slate-100 sm:text-4xl">
        {title}
      </h2>
      {description && (
        <p
          className={`mt-4 text-slate-600 dark:text-slate-400 text-lg leading-relaxed ${
            centered ? "mx-auto max-w-2xl" : "max-w-2xl"
          }`}
        >
          {description}
        </p>
      )}
      <div
        className={`mt-4 h-px bg-gradient-to-r from-cyan-500/50 dark:from-cyan-400/50 to-transparent max-w-xs ${
          centered ? "mx-auto" : ""
        }`}
      />
    </div>
  );
}
