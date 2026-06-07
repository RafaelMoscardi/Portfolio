export interface SkillCategory {
  name: string;
  icon: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    name: "Frontend",
    icon: "🖥️",
    skills: ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Next.js", "Tailwind CSS"],
  },
  {
    name: "Backend",
    icon: "⚙️",
    skills: ["Node.js", "APIs REST", "PostgreSQL", "Prisma", "Autenticação", "Webhooks"],
  },
  {
    name: "Ferramentas",
    icon: "🛠️",
    skills: ["Git", "GitHub", "Vercel", "Docker", "Postman", "Supabase", "Neon"],
  },
  {
    name: "Interesses",
    icon: "🔭",
    skills: ["Observabilidade", "Segurança", "IA aplicada", "Arquitetura de Software"],
  },
];
