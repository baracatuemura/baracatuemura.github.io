# baracatuemura.github.io

Personal portfolio for **Guilherme Baracat Uemura** — Senior Full-stack Developer (Front-end Focus) specializing in Adobe Commerce / Magento.

## Tech Stack

- **Framework:** React 18
- **Bundler:** Vite 5
- **Styling:** SCSS with Material 3 design tokens (custom variables)
- **Carousel:** react-slick + slick-carousel
- **Deployment:** GitHub Pages via GitHub Actions

## Features

- Responsive Material 3 top app bar with scroll-aware styling
- Brand carousel showcasing key clients (Dunkin', Rio 2016, Fiat, Nissin, Jeep)
- Skills, experience, education, and languages sections
- Brand grid with client logos
- Social links (Email, LinkedIn, WhatsApp, GitHub)
- Navigation with active section tracking via IntersectionObserver

## Project Structure

```
src/
├── components/     # React components (About, Experience, Nav, etc.)
├── data/           # Static data files (skills, experience, brands, etc.)
├── styles/         # SCSS partials (_variables, _nav, _footer, etc.)
├── App.jsx         # Root component
├── App.scss        # Global styles
└── main.jsx        # Entry point
public/
├── assets/
│   ├── images/brands/   # Brand logos for carousel
│   └── images/companys/ # Company logos for experience section
```

## Dev

```bash
npm install
npm run dev      # local dev server (http://localhost:5173)
npm run build    # production build -> dist/
npm run preview  # preview production build
```

## Deploy

Pushes to `master` trigger a GitHub Actions workflow that builds the project and deploys to GitHub Pages at [baracatuemura.github.io](https://baracatuemura.github.io).

## Credits

- Built with [opencode](https://opencode.ai) — an interactive CLI tool for software engineering tasks.
- AI assistance provided by **DeepSeek V4 Flash** (free version).
