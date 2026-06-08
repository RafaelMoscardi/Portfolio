export type Lang = "pt" | "en";

export const translations = {
  pt: {
    nav: {
      home: "Início",
      about: "Sobre",
      skills: "Habilidades",
      projects: "Projetos",
      contact: "Contato",
    },
    hero: {
      badge: "Disponível para estágio em Engenharia de Software",
      roleLabel: "Estudante de Eng. Software · Desenvolvedor Full-Stack",
      subtitle: "Estudante de Engenharia de Software · Desenvolvedor Full-Stack em formação",
      description:
        "Construo aplicações web full-stack com foco em produto real, backend sólido e boas práticas de engenharia de software.",
      viewProjects: "Ver projetos",
      resume: "Currículo ↓",
      scroll: "scroll",
      currentlyBuilding: "EM DESENVOLVIMENTO",
      coreStack: "STACK PRINCIPAL",
      profileRole: "Dev Full-Stack",
      profileLocation: "Brasil",
    },
    about: {
      label: "// sobre mim",
      title: "Quem sou eu",
      description:
        "Sou estudante de Engenharia de Software e desenvolvedor em formação, com foco em criar aplicações reais e bem estruturadas. Tenho interesse em desenvolvimento full-stack, APIs, dashboards, observabilidade, segurança e IA aplicada. Busco evoluir criando projetos que resolvem problemas reais e demonstram domínio técnico.",
      highlights: [
        { label: "Foco", value: "Full-Stack" },
        { label: "Área", value: "Eng. Software" },
        { label: "Projeto atual", value: "PulseOps" },
        { label: "Status", value: "Disponível" },
      ],
    },
    projects: {
      label: "// projetos",
      title: "O que estou construindo",
      viewAll: "Ver todos →",
      pageLabel: "// projetos",
      pageTitle: "Todos os Projetos",
      pageDescription:
        "Projetos desenvolvidos com foco em produto, escalabilidade e boas práticas de engenharia de software.",
      active: "Projetos ativos",
      upcoming: "Em desenvolvimento",
      back: "← Voltar",
    },
    card: {
      featured: "Destaque",
      comingSoon: "Em breve",
      caseStudy: "Ver estudo de caso →",
      viewOnline: "Ver online ↗",
    },
    projectsData: {
      pulseops: {
        tagline: "Plataforma de Monitoramento de Aplicações",
        description:
          "Sistema full-stack para monitorar APIs e sites, medir tempo de resposta, registrar histórico de verificações, calcular uptime, controlar incidentes e enviar alertas via webhook.",
      },
      "devmatch-ai": {
        tagline: "Análise de currículo e vagas com IA",
        description:
          "Plataforma que analisa currículos e vagas de emprego usando IA para sugerir melhorias e encontrar o match ideal entre candidato e oportunidade.",
      },
      condohub: {
        tagline: "SaaS de gestão condominial",
        description:
          "Plataforma SaaS completa para gestão de condomínios: controle financeiro, comunicados, reservas de espaços e gestão de moradores.",
      },
    },
    skills: {
      label: "// stack",
      title: "Habilidades & Tecnologias",
      description:
        "Tecnologias que uso e áreas que estou explorando no meu desenvolvimento como engenheiro de software.",
      categories: [
        { name: "Frontend", icon: "🖥️", skills: ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Next.js", "Tailwind CSS"] },
        { name: "Backend", icon: "⚙️", skills: ["Node.js", "APIs REST", "PostgreSQL", "Prisma", "Authentication", "Webhooks"] },
        { name: "Ferramentas", icon: "🛠️", skills: ["Git", "GitHub", "Vercel", "Docker", "Postman", "Supabase", "Neon"] },
        { name: "Interesses", icon: "🔭", skills: ["Observabilidade", "Segurança", "IA aplicada", "Arquitetura de Software"] },
      ],
    },
    timeline: {
      label: "// jornada",
      title: "Linha do Tempo",
      description: "A evolução dos meus estudos e projetos.",
      events: [
        { year: "2025", label: "Início da jornada", description: "Início dos estudos em Engenharia de Software com foco em desenvolvimento web e construção de projetos reais.", status: "done" as const },
        { year: "2026", label: "Estudos em Engenharia de Software", description: "Aprofundamento em arquitetura de software, banco de dados, segurança, observabilidade e boas práticas de desenvolvimento.", status: "current" as const },
        { year: "2026", label: "Desenvolvimento do PulseOps", description: "Construção do PulseOps: plataforma full-stack de monitoramento de APIs e sites com dashboard, histórico de checks e alertas.", status: "current" as const },
        { year: "Em breve", label: "DevMatch AI", description: "Desenvolvimento de plataforma que usa IA para análise de currículos e match com vagas de emprego.", status: "next" as const },
        { year: "Futuro", label: "CondoHub SaaS", description: "Projeto principal futuro: plataforma SaaS completa para gestão condominial.", status: "next" as const },
      ],
    },
    contact: {
      label: "// contato",
      title: "Vamos conversar?",
      description: "Estou disponível para colaborações, projetos, estudos e oportunidades. Entra em contato!",
      copied: "Copiado! ✓",
      send: "Enviar e-mail",
      resume: "Currículo ↓",
    },
    footer: {
      role: "Desenvolvedor Full-Stack em formação",
    },
    pulseops: {
      home: "início",
      projectsLink: "projetos",
      caseStudyBadge: "Estudo de Caso",
      inDevBadge: "Lançado",
      tagline: "Plataforma de Monitoramento de Aplicações",
      description:
        "Sistema full-stack para monitorar APIs e sites, medir tempo de resposta, registrar histórico de verificações, calcular uptime, controlar incidentes e enviar alertas via webhook.",
      stackLabel: "Stack utilizada",
      viewCode: "Ver código no GitHub ↗",
      viewDemo: "Ver demo ao vivo ↗",
      problem: {
        num: "01.",
        title: "Problema resolvido",
        text: "Desenvolvedores e equipes de engenharia precisam saber quando seus serviços estão fora do ar — antes que os usuários descubram. Ferramentas de monitoramento existentes são caras ou complexas demais para projetos independentes. O PulseOps resolve isso com uma plataforma direta e funcional para monitorar APIs e sites, com histórico completo, cálculo de uptime e alertas via webhook.",
      },
      features: {
        num: "02.",
        title: "Funcionalidades principais",
        items: [
          { title: "Autenticação de usuários", description: "Sistema seguro de registro e login com sessões isoladas por usuário." },
          { title: "CRUD de serviços monitorados", description: "Cadastro, edição e remoção de URLs/APIs para monitoramento contínuo." },
          { title: "Verificação manual de URL", description: "Check imediato com medição de tempo de resposta e status HTTP." },
          { title: "Monitoramento automático", description: "Execução periódica de verificações em todos os serviços cadastrados." },
          { title: "Histórico de checks", description: "Registro completo de todas as verificações com status, tempo de resposta e data." },
          { title: "Dashboard com métricas", description: "Visualização de uptime, tempo médio de resposta e gráficos históricos com Recharts." },
          { title: "Controle de incidentes", description: "Abertura e resolução de incidentes com prevenção de duplicatas para a mesma falha." },
          { title: "Alertas via webhook", description: "Notificações automáticas para endpoints externos quando falhas são detectadas." },
        ],
      },
      architecture: {
        num: "03.",
        title: "Arquitetura resumida",
        rows: [
          { label: "Frontend", value: "Next.js App Router + TypeScript + Tailwind CSS" },
          { label: "API", value: "Next.js API Routes (REST)" },
          { label: "Banco", value: "PostgreSQL (Neon) + Prisma ORM" },
          { label: "Auth", value: "NextAuth.js com sessões seguras" },
          { label: "Charts", value: "Recharts para gráficos históricos" },
          { label: "Deploy", value: "Vercel (frontend + API)" },
        ],
      },
      interface: {
        num: "04.",
        title: "Interface",
        screenshots: ["Dashboard principal", "Lista de serviços", "Painel de incidentes", "Notificações por webhook"],
      },
      challenges: {
        num: "05.",
        title: "Desafios técnicos",
        solutionLabel: "solução",
        items: [
          { title: "Isolamento de dados por usuário", description: "Garantir que cada usuário visualize apenas seus próprios serviços e dados, sem vazamento entre contas.", solution: "Toda query ao banco inclui o userId da sessão como filtro obrigatório, validado na camada de API." },
          { title: "Prevenção de incidentes duplicados", description: "Evitar que múltiplas falhas consecutivas do mesmo serviço gerem incidentes duplicados.", solution: "Verificação de incidente com status 'open' antes de criar um novo, transitando para 'resolved' na recuperação." },
          { title: "Medição precisa de tempo de resposta", description: "Capturar o tempo de resposta real de forma precisa e consistente entre verificações.", solution: "Uso de performance.now() antes e após o fetch, armazenando a diferença em milissegundos." },
          { title: "Tratamento de falhas diversas", description: "Lidar com timeouts, DNS inválido, status HTTP de erro e outros tipos de falha.", solution: "Try/catch com categorização de erros: timeout, DNS, HTTP error — cada tipo registrado no histórico." },
          { title: "Arquitetura escalável", description: "Organizar o projeto para adicionar features sem acumular dívida técnica.", solution: "Separação clara entre API routes, services, repositories e componentes de UI." },
        ],
      },
      learnings: {
        num: "06.",
        title: "Aprendizados",
        items: [
          "Modelagem de dados relacional com Prisma e PostgreSQL",
          "Construção de dashboard interativo com métricas reais usando Recharts",
          "Controle de autenticação e autorização em aplicações Next.js",
          "Design de sistema de monitoramento com histórico e incidentes",
          "Integração com webhooks para alertas externos",
          "Pensamento de produto aplicado a observabilidade",
          "Estruturação de projetos full-stack escaláveis",
        ],
      },
      nextSteps: {
        num: "07.",
        title: "Próximos passos",
        items: [
          "Monitoramento por intervalo configurável por serviço",
          "Alertas via e-mail além de webhooks",
          "Múltiplos ambientes por serviço (produção, staging)",
          "Status page pública por usuário",
          "Métricas de SLA e relatórios mensais exportáveis",
        ],
      },
      allProjects: "← Todos os projetos",
    },
  },

  en: {
    nav: {
      home: "Home",
      about: "About",
      skills: "Skills",
      projects: "Projects",
      contact: "Contact",
    },
    hero: {
      badge: "Open to Software Engineering internships",
      roleLabel: "Software Eng. Student · Full-Stack Developer",
      subtitle: "Software Engineering Student · Full-Stack Developer in training",
      description:
        "I build full-stack web applications focused on real product, solid backend and software engineering best practices.",
      viewProjects: "See projects",
      resume: "Resume ↓",
      scroll: "scroll",
      currentlyBuilding: "CURRENTLY BUILDING",
      coreStack: "CORE STACK",
      profileRole: "Full Stack Dev",
      profileLocation: "Brazil",
    },
    about: {
      label: "// about me",
      title: "Who I am",
      description:
        "I'm a Software Engineering student and developer in training, focused on building real and well-structured applications. I'm interested in full-stack development, APIs, dashboards, observability, security and applied AI. I strive to grow by creating projects that solve real problems and demonstrate technical depth.",
      highlights: [
        { label: "Focus", value: "Full-Stack" },
        { label: "Field", value: "Eng. Software" },
        { label: "Current project", value: "PulseOps" },
        { label: "Status", value: "Available" },
      ],
    },
    projects: {
      label: "// projects",
      title: "What I'm building",
      viewAll: "See all →",
      pageLabel: "// projects",
      pageTitle: "All Projects",
      pageDescription:
        "Projects developed with focus on product, scalability and software engineering best practices.",
      active: "Active projects",
      upcoming: "In development",
      back: "← Back",
    },
    card: {
      featured: "Featured",
      comingSoon: "Coming soon",
      caseStudy: "View case study →",
      viewOnline: "View online ↗",
    },
    projectsData: {
      pulseops: {
        tagline: "Application Monitoring Platform",
        description:
          "Full-stack system to monitor APIs and websites, measure response time, record check history, calculate uptime, manage incidents and send webhook alerts.",
      },
      "devmatch-ai": {
        tagline: "Resume and job matching with AI",
        description:
          "Platform that analyzes resumes and job listings using AI to suggest improvements and find the ideal match between candidate and opportunity.",
      },
      condohub: {
        tagline: "Condominium management SaaS",
        description:
          "Complete SaaS platform for condominium management: financial control, announcements, space reservations and resident management.",
      },
    },
    skills: {
      label: "// stack",
      title: "Skills & Technologies",
      description:
        "Technologies I use and areas I'm exploring in my journey as a software engineer.",
      categories: [
        { name: "Frontend", icon: "🖥️", skills: ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Next.js", "Tailwind CSS"] },
        { name: "Backend", icon: "⚙️", skills: ["Node.js", "REST APIs", "PostgreSQL", "Prisma", "Authentication", "Webhooks"] },
        { name: "Tools", icon: "🛠️", skills: ["Git", "GitHub", "Vercel", "Docker", "Postman", "Supabase", "Neon"] },
        { name: "Interests", icon: "🔭", skills: ["Observability", "Security", "Applied AI", "Software Architecture"] },
      ],
    },
    timeline: {
      label: "// journey",
      title: "Timeline",
      description: "The evolution of my studies and projects.",
      events: [
        { year: "2025", label: "Journey begins", description: "Started studying Software Engineering with a focus on web development and building real projects.", status: "done" as const },
        { year: "2026", label: "Software Engineering studies", description: "Deepening knowledge in software architecture, databases, security, observability and development best practices.", status: "current" as const },
        { year: "2026", label: "Building PulseOps", description: "Building PulseOps: full-stack platform for monitoring APIs and websites with dashboard, check history and alerts.", status: "current" as const },
        { year: "Soon", label: "DevMatch AI", description: "Development of a platform that uses AI for resume analysis and job matching.", status: "next" as const },
        { year: "Future", label: "CondoHub SaaS", description: "Future main project: complete SaaS platform for condominium management.", status: "next" as const },
      ],
    },
    contact: {
      label: "// contact",
      title: "Let's talk?",
      description: "I'm available for collaborations, projects, studies and opportunities. Get in touch!",
      copied: "Copied! ✓",
      send: "Send email",
      resume: "Resume ↓",
    },
    footer: {
      role: "Full-Stack Developer in training",
    },
    pulseops: {
      home: "home",
      projectsLink: "projects",
      caseStudyBadge: "Case Study",
      inDevBadge: "Launched",
      tagline: "Application Monitoring Platform",
      description:
        "Full-stack system to monitor APIs and websites, measure response time, record check history, calculate uptime, manage incidents and send webhook alerts.",
      stackLabel: "Tech stack",
      viewCode: "View code on GitHub ↗",
      viewDemo: "View live demo ↗",
      problem: {
        num: "01.",
        title: "Problem solved",
        text: "Developers and engineering teams need to know when their services are down — before users find out. Existing monitoring tools are too expensive or complex for independent projects. PulseOps solves this with a straightforward and functional platform to monitor APIs and websites, with complete history, uptime calculation and webhook alerts.",
      },
      features: {
        num: "02.",
        title: "Main features",
        items: [
          { title: "User authentication", description: "Secure registration and login system with isolated sessions per user." },
          { title: "Monitored services CRUD", description: "Create, edit and remove URLs/APIs for continuous monitoring." },
          { title: "Manual URL check", description: "Immediate check with response time measurement and HTTP status." },
          { title: "Automatic monitoring", description: "Periodic execution of checks on all registered services." },
          { title: "Check history", description: "Complete record of all checks with status, response time and date." },
          { title: "Dashboard with metrics", description: "Visualization of uptime, average response time and historical charts with Recharts." },
          { title: "Incident management", description: "Open and resolve incidents with duplicate prevention for the same failure." },
          { title: "Webhook alerts", description: "Automatic notifications to external endpoints when failures are detected." },
        ],
      },
      architecture: {
        num: "03.",
        title: "Architecture overview",
        rows: [
          { label: "Frontend", value: "Next.js App Router + TypeScript + Tailwind CSS" },
          { label: "API", value: "Next.js API Routes (REST)" },
          { label: "Database", value: "PostgreSQL (Neon) + Prisma ORM" },
          { label: "Auth", value: "NextAuth.js with secure sessions" },
          { label: "Charts", value: "Recharts for historical graphs" },
          { label: "Deploy", value: "Vercel (frontend + API)" },
        ],
      },
      interface: {
        num: "04.",
        title: "Interface",
        screenshots: ["Main dashboard", "Services list", "Incidents panel", "Webhook notifications"],
      },
      challenges: {
        num: "05.",
        title: "Technical challenges",
        solutionLabel: "solution",
        items: [
          { title: "User data isolation", description: "Ensuring each user only sees their own services and data, without leakage between accounts.", solution: "Every database query includes the session userId as a mandatory filter, validated at the API layer." },
          { title: "Preventing duplicate incidents", description: "Avoiding multiple consecutive failures of the same service generating duplicate incidents.", solution: "Check for open incident before creating a new one, transitioning to 'resolved' on recovery." },
          { title: "Accurate response time measurement", description: "Capturing real response time precisely and consistently between checks.", solution: "Using performance.now() before and after the fetch, storing the difference in milliseconds." },
          { title: "Handling diverse failures", description: "Dealing with timeouts, invalid DNS, HTTP error status and other failure types.", solution: "Try/catch with error categorization: timeout, DNS, HTTP error — each type recorded in history." },
          { title: "Scalable architecture", description: "Organizing the project so new features can be added without accumulating technical debt.", solution: "Clear separation between API routes, services, repositories and UI components." },
        ],
      },
      learnings: {
        num: "06.",
        title: "Learnings",
        items: [
          "Relational data modeling with Prisma and PostgreSQL",
          "Building interactive dashboards with real metrics using Recharts",
          "Authentication and authorization control in Next.js apps",
          "Designing monitoring systems with history and incidents",
          "Webhook integration for external alerts",
          "Product thinking applied to observability",
          "Structuring scalable full-stack projects",
        ],
      },
      nextSteps: {
        num: "07.",
        title: "Next steps",
        items: [
          "Configurable monitoring interval per service",
          "Email alerts in addition to webhooks",
          "Multiple environments per service (production, staging)",
          "Public status page per user",
          "SLA metrics and exportable monthly reports",
        ],
      },
      allProjects: "← All projects",
    },
  },
};

export type T = typeof translations.pt;
