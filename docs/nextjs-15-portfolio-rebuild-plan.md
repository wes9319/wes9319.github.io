# Next.js 15 portfolio rebuild — agent playbook

> **Purpose:** Single source of truth for implementing this portfolio as a Next.js 15 static site with en/es i18n and GitHub Pages.  
> **Audience:** Coding agents and humans. Optimize execution order; avoid scope creep.

---

## Repo baseline (facts — read before editing)

| Fact | Value |
|------|--------|
| Current stack | Static Mobirise export (`index.html`, `knowledge.html`, `education.html`, `work&proy.html`, `contact.html`) |
| Existing README | `README.md` → title only (`wes9319.github.io`) |
| Branch for this doc | `cursor/portfolio-nextjs-plan-e129` |

**Do not** modify legacy HTML in the same PR as the new Next app unless the task explicitly asks to migrate content—prefer a **new subdirectory** (e.g. `web/` or `app-next/`) for the Next project.

---

## Goal

Recreate the personal portfolio with:

- **Similar but improved** UI/UX (modern layout, accessibility, performance).
- **All relevant information** preserved; **extension** via data files (not scattered strings in components).
- **Locales:** `en` and `es` — default via **browser language** ± optional **geo hint**; **always** allow **manual override** persisted (cookie / localStorage).
- **Deploy:** **GitHub Pages** → requires **`output: 'export'`** (static HTML/CSS/JS only).

---

## Hard constraints (must satisfy)

1. **Static export:** `next.config` → `output: 'export'`. No reliance on Node SSR, Edge middleware-as-deployed-runtime, or dynamic server routes unless replaced by client-side or external APIs.
2. **`basePath`:** If the site is **not** at domain root (e.g. `username.github.io/repo-name`), set `basePath` and `assetPrefix` to match the repo name. If **`username.github.io`** root repo, `basePath` is empty.
3. **i18n URLs:** Use explicit locale segment — e.g. `/en/...`, `/es/...` — for SEO and shareable links.
4. **Contact form:** GitHub Pages cannot accept arbitrary POSTs without a backend. Integrate a **third-party form endpoint** (Formspree, Getform, Web3Forms, etc.) **or** degrade to `mailto:` + social links. Document required env vars in the Next app README.

---

## Content inventory (migrate into structured data)

Mirror these sections from the current site into typed content (TS or JSON + Zod):

| Section | Source files | Notes |
|---------|----------------|------|
| Hero + CV | `index.html` | Name, role, photo, PDF links (`assets/files/*.pdf`) |
| About | `index.html` | Bio paragraph(s) |
| Skills | `knowledge.html` | Four pillars + long bullets → consider splitting “summary” vs “detail” |
| Education timeline | `education.html` | Institutions, degrees/certs, dates optional |
| Projects / work | `work&proy.html` | Cards: title, description, image, optional repo/demo URLs |
| Contact + footer | `contact.html`, `index.html` | Email, phone, address, LinkedIn, GitHub, copyright |

**Extension rule:** New entries = append to arrays in content modules or JSON — **no** new page forks.

---

## Recommended stack

- **Next.js 15** (App Router) + **TypeScript**
- **Tailwind CSS** + **next/font**
- Optional **shadcn/ui** for Nav, Card, Button (align with existing design tokens)
- **i18n:** `next-intl` **or** lightweight dictionaries + `[locale]` segment — verify compatibility with **static export** (no middleware-only solutions without a static fallback)

---

## Locale detection (behavior spec)

Implement in this **priority order** (document in code comments):

1. **Saved preference** — cookie or `localStorage` key (e.g. `PORTFOLIO_LOCALE`) — **wins**.
2. **`Accept-Language`** — use via client `navigator.languages` on first visit (no server on GH Pages for static).
3. **Optional geo:** single client request to a geo-IP API → if country in LatAm → default `es`; else `en`. **Must be optional** (privacy, ad blockers, failures). **Never** override (1).

UI: **visible language switcher** in header; updating it sets (1) and navigates to same path under `/en` or `/es`.

---

## UI/UX improvements (scoped)

- Replace Mobirise carousel with **section teasers** (cards or horizontal strip) linking to Knowledge / Education / Work.
- Real `<a href>` for LinkedIn/GitHub in footer; semantic landmarks (`header`, `main`, `footer`), focus styles, `prefers-reduced-motion`.
- **Images:** `next/image` — for static export, configure `images.unoptimized` or official static-export image pattern if needed.

---

## Target directory layout (agent checklist)

Create under repo root (exact folder name is a project choice — **pick one** and stay consistent):

```text
docs/
  nextjs-15-portfolio-rebuild-plan.md   # this file
web/                                     # OR: portfolio-web/, app/
  app/
    [locale]/
      layout.tsx
      page.tsx
      knowledge/page.tsx
      education/page.tsx
      work/page.tsx
      contact/page.tsx
  content/
    en.ts
    es.ts
    schema.ts          # types + optional Zod
  public/
    images/
    files/             # CV PDFs
  next.config.ts
  package.json
  README.md            # build, env vars, GH Pages notes
```

---

## Implementation sequence (execute in order)

Dependencies: later steps assume earlier artifacts exist.

1. **Scaffold** Next.js 15 + TS + Tailwind in chosen subdirectory; enable `output: 'export'`.
2. **Configure `basePath`** for GitHub Pages (confirm repo URL pattern).
3. **Add `[locale]` segment** and minimal layouts; stub pages.
4. **Extract content** from legacy HTML into `content/en.ts` + `content/es.ts` (typed).
5. **Build components:** `SiteHeader`, `SiteFooter`, `Hero`, `About`, `SkillGrid`, `EducationTimeline`, `ProjectCard`, `ContactForm`.
6. **Wire i18n** strings + switcher + persistence + first-visit default.
7. **Contact:** integrate external form API or `mailto` fallback; test both locales.
8. **Assets:** copy images/PDFs to `public/`; fix broken legacy links (`page1.html` etc. → proper routes).
9. **SEO:** `generateMetadata` per page/locale; `alternates.languages` for en/es.
10. **CI:** GitHub Action — install, `next build`, upload `out/` to Pages (artifact or `gh-pages` branch).

---

## GitHub Actions / Pages (verification)

- Build output directory: **`out/`** (Next static export default).
- Confirm **no 404** on refresh for nested routes — may need `trailingSlash: true` depending on host.
- Document **Node version** in Action to match local dev.

---

## Acceptance criteria (binary)

- [ ] `pnpm build` / `npm run build` produces static `out/` with **both** `/en` and `/es` routes.
- [ ] Language switcher persists across reloads.
- [ ] All legacy informational sections present in **both** locales (placeholders unacceptable unless marked `TODO` with ticket).
- [ ] Deployed GitHub Pages site loads with correct **`basePath`** (assets not 404).
- [ ] Lighthouse basics: no console errors on main flows; images have alt text; contact path works per chosen integration.

---

## Anti-patterns (do not)

- Do not depend on **Next middleware** for locale alone without verifying static-export behavior — validate with a production export build.
- Do not embed large biography edits only in JSX — use **content modules**.
- Do not ship the Mobirise contact form POST to dead endpoints — replace explicitly.

---

## Quick reference commands

```bash
# After scaffolding inside ./web (adjust package manager)
cd web && npm run build && npx serve out

# Validate export folder exists
test -d web/out && echo "export ok"
```

---

## Related files in this repo (legacy reference)

| File | Role |
|------|------|
| `/workspace/index.html` | Home / hero / about / carousel |
| `/workspace/knowledge.html` | Skills |
| `/workspace/education.html` | Timeline |
| `/workspace/work&proy.html` | Projects / work |
| `/workspace/contact.html` | Contact form UI |

---

*Last updated: doc creation on branch `cursor/portfolio-nextjs-plan-e129`.*
