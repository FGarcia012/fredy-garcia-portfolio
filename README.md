# Fredy García — Developer Portfolio

A personal portfolio designed as a **developer's workspace**: an IDE-style layout, typing animations
and an interactive terminal. Built with React, Bootstrap and Vite.

**Live site:** _add your Vercel link here after the first deploy_

## Features

- **IDE layout:** file-explorer sidebar, editor tab with breadcrumb and a VS Code–style status bar.
  On screens smaller than 992px the sidebar becomes a top bar with an Offcanvas menu.
- **Typing engine:** `useTypewriter` and `useRotatingText`. Text types the first time a page is visited in a
  session, any key or click skips it, and screen readers get the full text at once.
- **Boot screen:** a short startup sequence, once per session.
- **Interactive terminal** on the Home page: `help`, `whoami`, `about`, `skills`, `projects`, `goals`, `cv`,
  `contact`, `scrum`, `ls`, `cd <page>`, `clear`, `theme <green|cyan|amber>`, `github`, `linkedin`, plus a hidden
  easter egg. It has command history (↑ ↓), Tab autocomplete and tappable commands on phones.
- **Accent color switcher** (green, cyan, amber) from the status bar or the `theme` command. It is saved in
  `localStorage`.
- **MCI goals tracker** with terminal-style progress bars and a real Bootstrap progress bar for assistive technology.
- **Projects:** filterable cards and README-style detail pages with a screenshot carousel.
- **CV page:** timeline, skills, languages and certifications. The PDF opens in a modal on desktop and in a new
  tab on phones.
- **Background effects** (mouse devices only): drifting dot grid, cursor glow and optional scanlines.
- **SEO:** per-page title and description, Open Graph and Twitter cards, JSON-LD, `robots.txt` and `sitemap.xml`.
- **Accessibility:** semantic HTML, skip link, keyboard navigation, visible focus and `prefers-reduced-motion`
  support (the animations turn off).

## Tech stack

React 19 · Vite · React Router · Bootstrap 5.3 with `react-bootstrap` · Sass · `react-icons` ·
`@fontsource` (JetBrains Mono and Inter, self-hosted) · Oxlint

## Getting started

You need **Node.js 20.19+ or 22.12+**.

```bash
npm install
npm run dev
```

| Command | What it does |
|---|---|
| `npm run dev` | Starts the dev server with hot reload |
| `npm run build` | Creates the production build in `dist/` |
| `npm run preview` | Serves the production build locally (use this for Lighthouse) |
| `npm run lint` | Checks the code with Oxlint |

## Project structure

```
├─ public/
│  ├─ cv/                 CV PDF (Fredy-Garcia-CV-EN.pdf)
│  ├─ certificates/       certificate files shown in the modal
│  ├─ images/             profile photo, project screenshots
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
├─ vite.config.js         React plugin + SEO files (robots.txt, sitemap.xml)
└─ QA-CHECKLIST.md        manual tests to run before each deploy
```

## Editing the content

Everything you read on the site lives in `src/data/`. You do not need to touch components to change text.

| File | Controls |
|---|---|
| `profile.js` | Name, role, pitch, About text, CV summary, languages, availability, `cvFile` |
| `links.js` | GitHub, LinkedIn, Instagram and email |
| `projects.js` | Project cards and README pages |
| `goals.js` | MCI goals: deadlines, progress and key results |
| `values.js`, `mark.js` | Professional values, personal brand text and quote |
| `skills.js` | Technology icons, tooltip hints and methodologies |
| `experience.js`, `education.js` | CV timelines |
| `certifications.js` | Certificates (a file in a modal, a link, or both) |
| `navigation.js` | Pages in the sidebar and their SEO descriptions |

Items marked `[EDIT]` in the code are placeholders waiting for real information. Search the project for `[EDIT]`
to find them all.

### Add a project

Add one object to the array in `src/data/projects.js`. Any field can be `null` or empty: the card or README
section is simply hidden. Put screenshots in `public/images/` and reference them as `/images/<file>`.

### Add the CV

1. Save the PDF as `public/cv/Fredy-Garcia-CV-EN.pdf`.
2. In `src/data/profile.js` set `cvFile: '/cv/Fredy-Garcia-CV-EN.pdf'`.

The **Download CV** buttons appear automatically.

> **Privacy:** do not publish a phone number, age, home address or personal references in the site or in the CV
> file. Contact is only through email and social links.

## Deploy on Vercel

1. Push the project to GitHub.
2. Go to [vercel.com](https://vercel.com), sign in with GitHub and choose **Add New → Project**.
3. Import this repository. Vercel detects **Vite** and fills in the build command (`npm run build`) and the
   output folder (`dist`). You do not need to change anything.
4. Click **Deploy**. Every `git push` to `main` deploys again, and every other branch gets a preview link.
5. Open the site and test it (see below).

`vercel.json` makes every route (for example `/about`) load the app, so refreshing a page does not return a 404.
It also adds cache and security headers.

### Custom domain and SEO address

`robots.txt`, `sitemap.xml` and the share-card tags need the public address of the site. On Vercel it is filled in
automatically. If you add a **custom domain**, go to *Project → Settings → Environment Variables*, add
`VITE_SITE_URL` with the full address (for example `https://your-domain.com`) and redeploy.

### After the first deploy

- [ ] Refresh `/about` and `/projects`: they must not show a 404.
- [ ] Open `/robots.txt` and `/sitemap.xml`: they must show your real address.
- [ ] Paste the link into [opengraph.xyz](https://www.opengraph.xyz) to preview the share card.
- [ ] Run Lighthouse on the live site and follow `QA-CHECKLIST.md`.

## License

Personal project. The code is shared for learning; please do not copy the content (text, projects or images).
