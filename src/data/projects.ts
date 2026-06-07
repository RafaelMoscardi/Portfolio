export type ProjectStatus = "active" | "coming-soon";

export interface Project {
  id: string;
  name: string;
  tagline: string;
  description: string;
  status: ProjectStatus;
  techs: string[];
  caseStudyUrl?: string;
  githubUrl?: string;
  liveUrl?: string;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    id: "pulseops",
    name: "PulseOps",
    tagline: "Plataforma de Monitoramento de Aplicações",
    description:
      "Sistema full-stack para monitorar APIs e sites, medir tempo de resposta, registrar histórico de verificações, calcular uptime, controlar incidentes e enviar alertas via webhook.",
    status: "active",
    techs: ["Next.js", "TypeScript", "PostgreSQL", "Prisma", "Recharts", "Webhooks", "Authentication"],
    caseStudyUrl: "/projects/pulseops",
    githubUrl: "https://github.com/RafaelMoscardi",
    liveUrl: "#",
    featured: true,
  },
  {
    id: "devmatch-ai",
    name: "DevMatch AI",
    tagline: "Análise de currículo e vagas com IA",
    description:
      "Plataforma que analisa currículos e vagas de emprego usando inteligência artificial para sugerir melhorias e encontrar o match ideal entre candidato e oportunidade.",
    status: "coming-soon",
    techs: ["Next.js", "TypeScript", "OpenAI", "PostgreSQL"],
  },
  {
    id: "condohub",
    name: "CondoHub",
    tagline: "SaaS de gestão condominial",
    description:
      "Plataforma SaaS completa para gestão de condomínios: controle financeiro, comunicados, reservas de espaços e gestão de moradores.",
    status: "coming-soon",
    techs: ["Next.js", "TypeScript", "PostgreSQL", "Stripe"],
  },
];
