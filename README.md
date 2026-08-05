# OptiData Analytics — Portfolio

A static one-page portfolio for a Power BI developer, built with plain HTML/CSS/JS (no build step needed) — ready for GitHub Pages.

Live site: <https://bi-knowledgeanalytics.github.io/bi-portfolio/>

## Deploy to GitHub Pages

1. Push this repo to GitHub (it lives at `BI-KnowledgeAnalytics/bi-portfolio`).
2. Go to the repo → **Settings → Pages**.
3. Under "Build and deployment", set **Source: Deploy from a branch**, branch: `main`, folder: `/ (root)`.
4. Save. Your site will be live at `https://bi-knowledgeanalytics.github.io/bi-portfolio/`.

## Structure

- `index.html` — page markup (hero, project grid, approach, contact)
- `style.css` — design tokens + all styling
- `script.js` — project data (edit here to add/remove dashboards), filtering, lightbox, animations
- `assets/projects/` — your 14 dashboard screenshots

## Editing / adding a project

Everything about a project card lives in one object inside the `PROJECTS` array in `script.js`. Copy an existing object, point `img` at a new file in `assets/projects/`, and fill in `title`, `category` (`sales` / `pm` / `customer` / `ops`), `desc`, and `tags`.
