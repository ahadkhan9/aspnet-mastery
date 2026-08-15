# ASP.NET Core Mastery

A 2-week, interview + project driven **ASP.NET Core Web API** study program, published
as a documentation site built with [Fumadocs](https://fumadocs.dev) (Next.js, static export).

**Live site:** <https://ahadkhan9.github.io/aspnet-mastery/>

## What's inside

- `content/docs/` — all study content as MDX:
  - `plan.mdx` — the 2-week chapter map, schedule, improved prompt template, and the CommerceHub project design
  - `chapters/01-fundamentals.mdx` — hosting model, request pipeline, middleware
  - `chapters/02-dependency-injection.mdx` — DI lifetimes, scopes, options pattern
- Every chapter follows one consistent structure: objectives → concepts with copy-pasteable code →
  interview Q&A → scenario questions (Symptoms → Root cause → Fix) → project task → quiz.

## Local development

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # static export to out/
npm start          # serve the static build
```

## Deployment

Static export (`output: 'export'`) with `basePath: '/aspnet-mastery'` for GitHub Pages.
`.github/workflows/deploy.yml` builds and deploys on every push to `main` via
`actions/deploy-pages`. Client-side fetch URLs (search index, markdown copy) are
basePath-prefixed explicitly — Next.js does not rewrite string literals in client components.

## Adding a chapter

Add `content/docs/chapters/NN-name.mdx` with `title` + `description` frontmatter,
push to `main`, and the site updates automatically (~2 min).
