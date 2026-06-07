# Rafael Moscardi — Portfólio

Portfólio pessoal de Rafael Moscardi, estudante de Engenharia de Software e desenvolvedor full-stack em formação.

## Stack

- **Next.js 16** com App Router
- **TypeScript**
- **Tailwind CSS v4**
- **Geist Font** (sans + mono)
- Deploy: **Vercel**

## Estrutura

```
src/
├── app/
│   ├── page.tsx                  # Home
│   ├── projects/
│   │   ├── page.tsx              # Lista de projetos
│   │   └── pulseops/page.tsx     # Estudo de caso PulseOps
│   ├── layout.tsx
│   └── globals.css
├── components/
│   ├── layout/                   # Navbar, Footer
│   ├── sections/                 # Hero, About, Projects, Skills, Timeline, Contact
│   └── ui/                       # Badge, ProjectCard, SectionHeading
└── data/
    ├── projects.ts
    ├── skills.ts
    └── timeline.ts
```

## Rodando localmente

```bash
npm install
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000).

## Adicionando conteúdo

- **Projetos**: edite `src/data/projects.ts`
- **Skills**: edite `src/data/skills.ts`
- **Timeline**: edite `src/data/timeline.ts`
- **Currículo**: substitua `public/resume.pdf`
- **LinkedIn**: busque por `https://linkedin.com` nos components e substitua pela URL real

## Deploy

```bash
# Conecte o repositório no Vercel e clique em Deploy
# Nenhuma variável de ambiente necessária no momento
```
