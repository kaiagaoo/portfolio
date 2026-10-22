# Qianwen (Kaia) Gao — research portfolio

A minimal academic portfolio built with Next.js 14 and TypeScript. The site connects Qianwen Gao's work in behavioral evaluation with her interests in grounded reasoning, faithful explanations, and interpretable embodied agents.

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
- `public/chase-figure.png` is Figure 1 from the [CHASE paper](https://arxiv.org/html/2608.30466), used beside the publication entry.
- Run `scripts/build_research_cv.py` with Python, `reportlab`, and `pypdf` to rebuild the research CV. The script writes the final PDF to `output/pdf/` and copies it to `public/`.
- Update page title and description in `app/layout.tsx`.

The homepage uses ordinary links for email and research profiles. There is no contact form or backend service to configure.
