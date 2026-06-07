export type TimelineStatus = "done" | "current" | "next";

export interface TimelineEvent {
  year: string;
  label: string;
  description: string;
  status: TimelineStatus;
}

export const timelineEvents: TimelineEvent[] = [
  {
    year: "2025",
    label: "Início da jornada",
    description:
      "Início dos estudos em Engenharia de Software com foco em desenvolvimento web e construção de projetos reais.",
    status: "done",
  },
  {
    year: "2026",
    label: "Estudos em Engenharia de Software",
    description:
      "Aprofundamento em arquitetura de software, banco de dados, segurança, observabilidade e boas práticas de desenvolvimento.",
    status: "current",
  },
  {
    year: "2026",
    label: "Desenvolvimento do PulseOps",
    description:
      "Construção do PulseOps: plataforma full-stack de monitoramento de APIs e sites com dashboard, histórico de checks e alertas.",
    status: "current",
  },
  {
    year: "Em breve",
    label: "DevMatch AI",
    description:
      "Desenvolvimento de plataforma que usa IA para análise de currículos e match com vagas de emprego.",
    status: "next",
  },
  {
    year: "Futuro",
    label: "CondoHub SaaS",
    description:
      "Projeto principal futuro: plataforma SaaS completa para gestão condominial.",
    status: "next",
  },
];
