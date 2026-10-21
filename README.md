# Qianwen (Kaia) Gao — research portfolio

A minimal academic portfolio built with Next.js 14 and TypeScript. The site presents Qianwen Gao's interests in cognitive architectures, language, memory, commonsense reasoning, and human-aware agents alongside her publication and selected projects.

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Build

```bash
npm run build
```

Next.js exports the static site to `out/` (configured in `next.config.js`).

## Update content

- Edit the research statement, publication, projects, and background in `app/page.tsx`.
- Edit the simple layout and responsive rules in `app/globals.css`.
- Replace `public/profile.JPG` with a new portrait if needed.
- Replace `public/Kaia_Gao_Resume.pdf` when the résumé changes.
- Update page title and description in `app/layout.tsx`.

The homepage uses ordinary links for email and research profiles. There is no contact form or backend service to configure.
