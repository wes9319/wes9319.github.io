# Portfolio (Next.js)

Static Next.js 15 app for [wes9319.github.io](https://github.com/wes9319/wes9319.github.io). See repo root `docs/nextjs-15-portfolio-rebuild-plan.md` for the full playbook.

## Requirements

- **Node.js 20+** (recommended; Tailwind v4 and tooling expect it)
- npm (bundled with Node)

## Setup

```bash
cd web
npm install
```

## Scripts

| Command | Description |
|--------|--------------|
| `npm run dev` | Dev server with Turbopack — [http://localhost:3000](http://localhost:3000) |
| `npm run build` | Production build + **static export** to `out/` |
| `npm run start` | Serves the **Node** production server (not used for GitHub Pages) |
| `npm run lint` | ESLint |

After `npm run build`, open the static site locally:

```bash
npx serve out
```

Visiting `/` redirects to `/en` (default locale). Routes are locale-prefixed: `/en`, `/es`, `/en/knowledge`, etc.

## Configuration notes

- **`next.config.ts`:** `output: 'export'` for GitHub Pages; `images.unoptimized` for static hosting.
- **Static routes:** `app/[locale]/layout.tsx` exports `generateStaticParams()` so `/en` and `/es` (and nested routes) are emitted into `out/` at build time.
- **`basePath`:** Not set — correct if the site is served at the Pages domain root (`username.github.io`). If you deploy this app under a **project** URL (`username.github.io/repo-name`), set `basePath` and `assetPrefix` in `next.config.ts` and document it here.

## Environment variables

_None yet._ When contact forms or analytics are added, list names and purpose here.

---

## Progress log

_Update this section as features ship._

| Status | Item |
|--------|------|
| Done | Scaffold Next.js 15, Tailwind, App Router, static export |
| Done | Stub `[locale]` routes (`en` / `es`), placeholder content modules |
| Todo | Migrate copy and assets from legacy Mobirise HTML |
| Todo | Locale detection + persisted preference (see plan doc) |
| Todo | GitHub Actions workflow for Pages |
