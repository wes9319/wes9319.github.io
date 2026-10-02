# Elvis Wesley Vásquez — Portfolio

Personal portfolio for [wes9319.github.io](https://wes9319.github.io), built with [Astro](https://astro.build/) and deployed to GitHub Pages via GitHub Actions.

## Local development

Requirements: **Node.js 22+** and npm.

```bash
npm install
npm run dev
```

Open [http://localhost:4321](http://localhost:4321). English is the default at `/`; Spanish is at `/es/`.

Other scripts:

| Command           | Action                              |
| ----------------- | ----------------------------------- |
| `npm run build`   | Production build to `./dist/`       |
| `npm run preview` | Preview the production build locally |

## GitHub Pages setup

1. In the repository **Settings → Pages**, set **Build and deployment** source to **GitHub Actions** (not “Deploy from a branch”).
2. Merging to the default branch (`master`) runs [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml), which builds Astro and publishes the `dist` folder to GitHub Pages.
3. The site is configured with `site: 'https://wes9319.github.io'` and `base: '/'` in `astro.config.mjs` for a user/org Pages site at the repo root.

Pull requests do not deploy to production until they are merged into `master`.

## Content & assets

- Copy and translations live in `src/i18n/` (`en.ts`, `es.ts`).
- CV download: `public/cv.pdf`
- Profile photo and EWVV logo: `public/images/`

## License

© Elvis Wesley Vásquez. All rights reserved.
