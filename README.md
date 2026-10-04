# Fredy García — Developer Portfolio

A personal portfolio designed as a **developer's workspace**: an IDE-style layout, typing animations and an
interactive terminal. Built with React, Bootstrap and Vite.

**Live site:** https://fredy-garcia-portfolio.vercel.app/

## Features

- **IDE layout:** file-explorer sidebar, editor tab with breadcrumb and a VS Code–style status bar. On screens
  smaller than 992px the sidebar becomes a top bar with an Offcanvas menu.
- **Typing engine:** `useTypewriter` and `useRotatingText`. Text types the first time a page is visited in a
  session, any key or click skips it, and screen readers get the full text at once.
- **Boot screen:** a short startup sequence, once per session.
- **Interactive terminal** on the Home page: `help`, `whoami`, `about`, `skills`, `projects`, `goals`, `cv`,
  `contact`, `scrum`, `ls`, `cd <page>`, `clear`, `theme <green|cyan|amber>`, `github`, `linkedin`, plus a hidden
  easter egg. It has command history (↑ ↓), Tab autocomplete and tappable commands on phones.
- **Accent color switcher** (green, cyan, amber) from the status bar or the `theme` command. It is saved in
  `localStorage`.
- **Technologies marquee** that keeps moving, even on hover.
- **MCI goals tracker** with terminal-style progress bars and a real Bootstrap progress bar for assistive technology.
- **Projects:** filterable cards and README-style detail pages with live demo and GitHub links.
- **CV page:** timeline, skills, languages and certifications. The PDF opens in a modal on desktop and in a new
  tab on phones.
- **Certification:** CCNA: Introduction to Networks (Cisco Networking Academy), with the diploma in a modal and
  a verification link on Credly.
- **Background effects** (mouse devices only): drifting dot grid, cursor glow and optional scanlines.
- **SEO:** per-page title and description, Open Graph and Twitter cards, JSON-LD, `robots.txt` and `sitemap.xml`.
- **Accessibility:** semantic HTML, skip link, keyboard navigation, visible focus and `prefers-reduced-motion`
  support. With reduced motion the marquee becomes a static grid and the other animations turn off.

## Projects shown on the site

| Project | Stack | Links |
|---|---|---|
| AHORRA HOY | React, Tailwind CSS, Node.js, Express, MongoDB | [Live](https://ahorrahoy-2c3a6.web.app/) · [Front](https://github.com/FGarcia012/AhorraHoy_Front) · [Back](https://github.com/FGarcia012/AhorraHoy_Backend) |
| BLFAGS | React, Tailwind CSS, Node.js, Express, MongoDB | [Live](https://bl-front.web.app/) · [Front](https://github.com/FGarcia012/BLFAGS_Front) · [Back](https://github.com/FGarcia012/BLFAGS_Back) |
| This portfolio | React, Bootstrap, Sass, Vite | [Live](https://fredy-garcia-portfolio.vercel.app/) · [Code](https://github.com/FGarcia012/fredy-garcia-portfolio) |
| School Management | Python, Odoo 8 | [Code](https://github.com/FGarcia012/School_Management) |
| Odoo ERP Customization | Odoo 8 | Private company work |

## Tech stack

React 19 · Vite · React Router · Bootstrap 5.3 with `react-bootstrap` · Sass · `react-icons` ·
`@fontsource` (JetBrains Mono and Inter, self-hosted) · Oxlint

## Project structure

```
├─ public/
│  ├─ cv/                 CV PDF (Fredy-Garcia-CV.pdf)
│  ├─ certificates/       certificate files shown in the modal
│  ├─ images/             profile photo and certification badge
│  ├─ favicon.svg
│  └─ og-image.png        card shown when the link is shared
├─ src/
│  ├─ components/         Layout, Sidebar, StatusBar, Terminal, ProjectCard, SkillsGrid, ...
│  ├─ hooks/              useTypewriter, useRotatingText, useReveal, useTerminal, useAccent, ...
│  ├─ pages/              Home, About, Values, Mark, Mci, Projects, ProjectDetail, Cv, Contact, NotFound
│  ├─ data/               all the site content (see below)
│  ├─ styles/             theme.css, animations.css, components.css, overrides.scss
│  ├─ utils/              accent store, terminal commands, session helpers
│  ├─ App.jsx
│  └─ main.jsx
├─ vercel.json            route rewrites, cache and security headers
└─ vite.config.js         React plugin + SEO files (robots.txt, sitemap.xml)
```

## License

Personal project. The code is shared for learning; please do not copy the content (text, projects or images).
