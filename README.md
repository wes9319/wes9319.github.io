# EWVV Portfolio — React + TypeScript + Vite

Modern migration of the original Mobirise-based static site into a React application using Vite, TypeScript, Sass, and an Atomic Design architecture. UI and behavior are preserved while enabling a scalable, maintainable codebase with SOLID/DRY best practices, Context API, and Zustand for state management.

## Tech Stack
- React 19 + TypeScript
- Vite 7
- Sass (SCSS) for styling
- React Router
- Zustand (UI state)
- Embla Carousel (with Autoplay) for the home slider
- ESLint + Prettier

## Project Layout
```
.
├─ public/
│  └─ assets/                   # Static assets (images, css, fonts, vendor)
├─ src/
│  ├─ app/
│  │  ├─ styles/               # Global Sass: variables, mixins, global.scss
│  │  └─ store/                # Zustand stores (e.g., useUiStore)
│  ├─ design/                  # Atomic design system
│  │  ├─ atoms/
│  │  ├─ molecules/            # Reusable UI building blocks (e.g., Carousel, FeatureCard)
│  │  ├─ organisms/            # Composed sections (e.g., Navbar, Footer, HeroSection, TimelineSection)
│  │  └─ templates/            # Page templates (e.g., Layout)
│  ├─ pages/                   # Route-level pages (Home, Knowledge, Education, WorkProjects, Contact)
│  └─ shared/
│     └─ components/           # Cross-cutting components (e.g., Head for SEO)
├─ index.html                  # Vite entry HTML
├─ package.json                # Scripts & deps
└─ vite.config.ts              # Vite config
```

## Getting Started
Prerequisites:
- Node.js >= 18
- npm >= 10

Install dependencies:
```bash
npm install
```

Start development server:
```bash
npm run dev
```

Type checking:
```bash
npm run type-check
```

Lint and format:
```bash
npm run lint
npm run lint:fix
npm run format
```

Build for production and preview:
```bash
npm run build
npm run preview
```

The build output is generated in `dist/` and can be served as static assets.

## Architecture & Conventions
- Atomic Design: `atoms` → `molecules` → `organisms` → `templates` → `pages`.
- SOLID/DRY: UI primitives are extracted as reusable molecules/organisms; sections are composed in templates and pages.
- Styling: Global variables/mixins in `src/app/styles`, page/section fidelity kept by importing original CSS from `public/assets` in `global.scss`.
- State Management: Use `Zustand` (`src/app/store/useUiStore.ts`) for global UI state (e.g., theme, mobile menu). Context API can be added for cross-cutting concerns.
- Routing: Pages under `src/pages` are used by React Router (see app entry).

## Key Components
- Layout (`src/design/templates/Layout.tsx`)
  - Adds a skip-link for accessibility and wraps `Navbar`, `main`, and `Footer`.
- Navbar/Footer (`src/design/organisms/...`)
  - Preserve original markup and links; React Router for internal nav.
- HeroSection (`src/design/organisms/HeroSection.tsx`)
  - Reusable hero/section with optional overlay and background image.
- Carousel (`src/design/molecules/Carousel.tsx`)
  - Embla Carousel with autoplay, accessible next/prev controls, preserves original content.
- FeatureCard (`src/design/molecules/FeatureCard.tsx`)
  - Generic card with optional icon/image and description.
- TimelineSection (`src/design/organisms/TimelineSection.tsx`)
  - Renders the education timeline from data.
- Head (`src/shared/components/Head.tsx`)
  - SEO/meta management for title, description, OG/Twitter tags, and canonical URL.

## Accessibility (a11y)
- Skip link to main content in `Layout`.
- Focus outlines and `.sr-only` helper in `global.scss`.
- Buttons/links include `aria-label`s where appropriate.

## SEO
- Use the `Head` component in pages to set:
  - `title`, `description`, `keywords`, `og:image`, `canonical`.

Example:
```tsx
<Head
  title="Elvis W. Vásquez - Desarrollador Web | Portfolio"
  description="Portfolio de Elvis Wesley Vásquez, desarrollador web full stack especializado en React, TypeScript, Node.js y tecnologías modernas. Quito, Ecuador."
  keywords="elvis vasquez, desarrollador web, react, typescript, javascript, full stack, quito, ecuador, portfolio"
  canonical="https://example.com/"
/>
```

## Styles
- Global styles at `src/app/styles/global.scss` import original vendor CSS from `public/assets` to keep current look and feel.
- Sass variables and mixins in `src/app/styles/_variables.scss` and `_mixins.scss`.

## Scripts (package.json)
- `dev`: start Vite dev server
- `build`: type-check and build production bundle
- `preview`: preview built output locally
- `type-check`: run TypeScript without emitting
- `lint` / `lint:fix`: run ESLint (with TypeScript, hooks, react-refresh)
- `format` / `format:check`: run Prettier

## Deployment
Any static hosting can serve the output of `npm run build` from `dist/`.
