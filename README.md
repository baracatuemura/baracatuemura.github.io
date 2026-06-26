# baracatuemura.github.io

Personal portfolio for **Guilherme Baracat Uemura** — Senior Full-stack Developer (Front-end Focus) specializing in Adobe Commerce / Magento.

## Tech Stack

- **Framework:** React 18
- **Bundler:** Vite 5
- **Styling:** SCSS with Material 3 design tokens (custom variables)
- **Carousel:** react-slick + slick-carousel
- **Images:** WebP format with lazy loading
- **Prerender:** Puppeteer generates static HTML at build time (SSR-like for crawlers)
- **Deployment:** GitHub Pages via GitHub Actions (gh-pages)

## Features

- Responsive Material 3 top app bar with scroll-aware styling
- Brand carousel showcasing key clients (Dunkin', Rio 2016, Fiat, Nissin, Jeep)
- Skills, experience, education, and languages sections
- Brand grid with client logos
- Social links (Email, LinkedIn, WhatsApp, GitHub)
- Navigation with active section tracking via IntersectionObserver
- Custom hooks (`useScrollSpy`, `useScrollHeader`) for reusable logic
- Semantic HTML5 (`<header>`, `<main>`, `<section>`, `<footer>`, `<article>`, `<ul>`/`<li>`)
- WebP images (86% size reduction on ecommerce screenshots)
- Static prerender for SEO and crawler visibility

## Project Structure

```
src/
├── pages/          # Page-level components (Home)
├── components/     # Reusable React components (About, Nav, Experience, etc.)
├── hooks/          # Custom React hooks (useScrollSpy, useScrollHeader)
├── data/           # Static data files (skills, experience, brands, etc.)
├── styles/         # SCSS partials (_variables, _nav, _footer, etc.)
├── App.jsx         # Root component → renders <Home />
├── App.scss        # Global styles
└── main.jsx        # Entry point
public/assets/
├── images/brands/     # Brand logos (PNG + WebP)
├── images/companys/   # Company logos
└── images/ecommerce/  # Store screenshots (WebP)
prerender.cjs       # Post-build script for static prerendering
```

## Dev

```bash
npm install
npm run dev      # local dev server (http://localhost:5173)
npm run build    # production build → dist/ + prerender static HTML
npm run preview  # preview production build
```

## Deploy

```bash
npm run deploy   # build + deploy to GitHub Pages via gh-pages
```

Pushes to `master` also trigger a GitHub Actions workflow that builds and deploys to GitHub Pages at [baracatuemura.github.io](https://baracatuemura.github.io).

## Credits

- Built with [opencode](https://opencode.ai) — an interactive CLI tool for software engineering tasks.
- AI assistance provided by **DeepSeek V4 Flash** (free version).
