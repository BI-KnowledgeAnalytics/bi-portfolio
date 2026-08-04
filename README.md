# DataVision Works — Portfolio

A static one-page portfolio for a Power BI developer, built with plain HTML/CSS/JS (no build step needed) — ready for GitHub Pages.

## Before you publish

1. Open `index.html` and update:
   - `mailto:your.email@example.com` → your real email (contact section, near the bottom)
   - `https://github.com/bi-knowledgeanalytics` → your real GitHub profile URL, if different
2. Open `script.js` and check the `PROJECTS` array — feel free to edit titles/descriptions/tags for accuracy.

## Deploy to GitHub Pages

1. Create a new repo (e.g. `your-username.github.io`, or any name like `portfolio`).
2. Upload all files in this folder **keeping the folder structure**:
   ```
   index.html
   style.css
   script.js
   assets/projects/*.jpg
   ```
3. Go to your repo → **Settings → Pages**.
4. Under "Build and deployment", set **Source: Deploy from a branch**, branch: `main`, folder: `/ (root)`.
5. Save. Your site will be live at:
   - `https://your-username.github.io/` (if the repo is named `your-username.github.io`), or
   - `https://your-username.github.io/repo-name/` (any other repo name).

## Structure

- `index.html` — page markup (hero, project grid, approach, contact)
- `style.css` — design tokens + all styling
- `script.js` — project data (edit here to add/remove dashboards), filtering, lightbox, animations
- `assets/projects/` — your 14 dashboard screenshots

## Editing / adding a project

Everything about a project card lives in one object inside the `PROJECTS` array in `script.js`. Copy an existing object, point `img` at a new file in `assets/projects/`, and fill in `title`, `category` (`sales` / `pm` / `customer` / `ops`), `desc`, and `tags`.
