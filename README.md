# Rafael Moscardi — Portfólio

Portfólio pessoal de Rafael Moscardi, estudante de Engenharia de Software e desenvolvedor full-stack em formação.

## Stack

- **Next.js 16** com App Router
- **TypeScript**
- **Tailwind CSS v4**
- **next-themes** (dark/light mode)
- **Geist Font** (sans + mono)
- Deploy: **Vercel**

## Estrutura

```
src/
├── app/
│   ├── page.tsx                  # Home (Hero, Skills, Projects, Contact)
│   ├── projects/
│   │   ├── page.tsx              # Lista de projetos
│   │   └── pulseops/page.tsx     # Estudo de caso PulseOps
│   ├── layout.tsx
│   └── globals.css
├── components/
│   ├── layout/                   # Navbar, Footer, ThemeProvider
│   ├── sections/                 # Hero, Projects, Skills, Contact
│   ├── pages/                    # ProjectsPageContent, PulseOpsContent
│   └── ui/                       # Badge, ProjectCard, SectionHeading, TechMarquee
├── contexts/
│   └── LanguageContext.tsx       # Contexto PT-BR / EN
└── data/
    ├── projects.ts               # Dados dos projetos
    └── translations.ts           # Textos PT-BR e EN
```

## Rodando localmente

```bash
npm install
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000).

## Adicionando conteúdo

- **Projetos**: edite `src/data/projects.ts`
- **Textos e traduções**: edite `src/data/translations.ts`
- **Skills**: edite `translations.ts` → `skills.categories`
- **Email de contato**: busque `rafaelmoscardi07@gmail.com` nos components

## Deploy na Vercel

1. Conecte o repositório no [Vercel](https://vercel.com)
2. Clique em **Deploy**
3. Nenhuma variável de ambiente necessária

## Checklist pré-publicação

- [x] Build limpo (`npm run build`)
- [x] TypeScript sem erros
- [x] ESLint sem erros
- [x] Responsivo (mobile, tablet, desktop)
- [x] Dark mode e light mode funcionando
- [x] Bilíngue PT-BR / EN
- [x] Links: GitHub, LinkedIn, email
- [x] PulseOps com estudo de caso completo
