# Acdyon Frontend Challenge

A premium analytics landing page built for the Acdyon Technologies Frontend Challenge (Part 2). The homepage demonstrates the product directly — visitors can upload a CSV and watch a live dashboard appear in under two seconds.

## Live Demo

<!-- Update this URL after Vercel deployment -->
**Production:** _Add Vercel URL here after deployment_

**GitHub:** https://github.com/raahulpandey/Acdyon-Assignment

---

## Tech Stack

| Tool | Version | Purpose |
|---|---|---|
| React | 19 | UI component library |
| Vite | 8 | Build tool and dev server |
| Tailwind CSS | 4 | Utility-first styling |
| Framer Motion | 13 | Dashboard reveal animation |

---

## Features

- **Interactive CSV demo** — drag and drop or click to browse; simulates a real upload flow with a four-step processing timeline
- **Live dashboard** — KPI cards, bar chart, and data table built as React components (no charting library)
- **AI Insights panel** — appears after the dashboard with data-driven findings and chart reasoning
- **Responsive** — works on mobile (390px) through desktop (1440px+)
- **Dark mode only** — designed around a dark colour palette inspired by Linear and Vercel
- **Honest copy** — no fake testimonials, logos, user counts, or pricing

---

## Installation

```bash
git clone https://github.com/raahulpandey/Acdyon-Assignment.git
cd Acdyon-Assignment
npm install
```

## Development

```bash
npm run dev
```

Opens at `http://localhost:5173`

## Build

```bash
npm run build
```

Output goes to `dist/`. Preview the production build locally with:

```bash
npm run preview
```

---

## Folder Structure

```
src/
├── components/
│   ├── Navbar.jsx            Sticky nav with scroll-blur effect
│   ├── Hero.jsx              Headline, subhead, and two CTAs
│   ├── InteractiveDemo.jsx   Core drag-and-drop + dashboard feature
│   ├── Features.jsx          Three product feature cards
│   ├── HowItWorks.jsx        Three-step process section
│   ├── DeveloperPhilosophy.jsx  Design principles
│   ├── CTA.jsx               Final call-to-action
│   └── Footer.jsx            Navigation links and copyright
├── App.jsx                   Root component; renders all sections
├── main.jsx                  React DOM entry point
└── index.css                 Tailwind import + base styles
index.html                    HTML shell with meta tags and Google Fonts
```

---

## Deployment

### Vercel (recommended)

1. Push to GitHub
2. Import the repository at [vercel.com/new](https://vercel.com/new)
3. Vercel auto-detects Vite — no configuration needed
4. Click **Deploy**

---

## Author

Built by Rahul Pandey for the Acdyon Technologies Frontend Challenge.
