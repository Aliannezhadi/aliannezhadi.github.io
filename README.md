# Meysam Aliannezhadi — Personal Portfolio

A polished, multilingual (Persian / English / German) Next.js portfolio, ready for GitHub Pages at **https://aliannezhadi.github.io**.

## Requirements
- Node.js 20+
- npm

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Test and build

```bash
npm run typecheck
npm run build
```

Static pages are generated into `out/`.

## Deploy to GitHub Pages

1. Sign in as the GitHub user **Aliannezhadi**.
2. Create a **public** repository named exactly **aliannezhadi.github.io**.
3. Upload this project **including `.github/workflows/deploy.yml`** to the repository's `main` branch.
4. Go to **Settings → Pages → Build and deployment → Source → GitHub Actions**.
5. Go to the repository's **Actions** tab and check the **Deploy Next.js to GitHub Pages** workflow. It runs automatically after a push to `main`.
6. The website will become accessible at **https://aliannezhadi.github.io/** after successful deployment.

For first-time upload from your local computer:

```bash
git init
git add .
git commit -m "Launch multilingual personal portfolio"
git branch -M main
git remote add origin https://github.com/Aliannezhadi/aliannezhadi.github.io.git
git push -u origin main
```

Do not select **Deploy from a branch** when using the included GitHub Actions workflow. Do not configure a custom domain: `aliannezhadi.github.io` is the default user Pages address.

## Languages / URLs
- Persian: `/` (homepage; keyword «علیان نژادی»)
- English: `/en/`
- German: `/de/`

Switching languages updates the URL. Content, titles, metadata, canonical URLs, hreflang links, JSON-LD Person markup, sitemap, and robots.txt are included.

## Content edits
- All translations, repo selections, metadata text: `lib/content.ts`
- Page design and layout: `components/portfolio.tsx`
- Colors and styling: `app/globals.css`

Repository details were based on the public `github.com/Aliannezhadi` profile as reviewed on October 9, 2026. Update content as your work evolves.

## Notes
- No credentials, contact form backend or invented employment/education data are embedded.
- Theme preference is stored locally in the browser.
- Google Fonts are loaded from Google; the system fallback works without network access.
- The language-specific `lang` and `dir` attributes are applied immediately on hydration (the static HTML layout defaults to Persian). For strict pre-hydration HTML language semantics on `/en` and `/de`, consider separating each language into dedicated root route-group layouts or using an edge-capable host.
- Source is static-export compatible; no API routes, middleware, ISR, or server-only runtime features are used.
