# Grooms by Kerrigan

A lightweight, responsive blog built with [Astro](https://astro.build) and deployed to GitHub Pages. It started from the Astro blog starter kit (`npm create astro@latest -- --template blog`).

Features:

- ✅ Minimal styling (make it your own!)
- ✅ 100/100 Lighthouse performance
- ✅ SEO-friendly with canonical URLs and Open Graph data
- ✅ Sitemap support
- ✅ RSS Feed support
- ✅ Markdown & MDX support

## 🚀 Project Structure

```text
├── public/               # Static assets copied as-is (favicons, etc.)
├── src/
│   ├── assets/           # Images and fonts processed by Astro
│   ├── components/       # Reusable .astro components
│   ├── content/blog/     # Blog posts (Markdown / MDX)
│   ├── layouts/          # Page layouts (e.g. BlogPost.astro)
│   ├── pages/            # File-based routes
│   ├── styles/global.css # Global styles and theme variables
│   ├── consts.ts         # Site title and description
│   └── content.config.ts # Content collection schema
├── astro.config.mjs
├── Dockerfile
├── docker-compose.yml
├── package.json
└── tsconfig.json
```

Astro looks for `.astro` or `.md` files in `src/pages/`. Each page is exposed as a route based on its file name.

`src/components/` is where Astro/React/Vue/Svelte/Preact components live.

`src/content/` contains "collections" of related Markdown and MDX documents. Use `getCollection()` to retrieve posts from `src/content/blog/`; frontmatter is type-checked against the schema in `src/content.config.ts`. See [Astro's Content Collections docs](https://docs.astro.build/en/guides/content-collections/) to learn more.

Any static assets that don't need processing can be placed in `public/`.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

Requires Node.js `>=22.12.0`.

### Running with Docker

```sh
docker compose up
```

This builds the image, installs dependencies, and starts the dev server at `http://localhost:4321`.

## ✍️ Add a blog post

Create a Markdown (`.md`) or MDX (`.mdx`) file in `src/content/blog/`. The file name becomes the URL slug. Example:

```md
---
title: "Molly's Summer Trim"
description: 'A short description of the post.'
pubDate: 2026-11-16
updatedDate: 2026-11-20      # optional
heroImage: '../../assets/molly-after.jpg' # optional
draft: false                 # optional, defaults to false
---

Post content goes here.
```

Put images in `src/assets/` and reference them with relative paths so Astro can optimize them.

## 🎨 Change the colors globally

Open `src/styles/global.css` and edit the CSS custom properties in `:root` (e.g. `--accent`, `--accent-dark`, `--gray`). The rest of the stylesheet uses these variables, so changing a value updates the theme throughout the site.

The site title and description live in `src/consts.ts`.

## 🌐 Deploy to `https://grooms-by-kerrigan.github.io/Blog/`

1. Create or open the GitHub repository named **Blog** under the `grooms-by-kerrigan` account.
2. Push the project to the `main` branch.
3. In GitHub, open **Settings → Pages** and set **Build and deployment → Source** to **GitHub Actions**.
4. The workflow in `.github/workflows/` builds the site with `npm run build` and deploys `dist/` on every push to `main`. Watch the **Actions** tab until the deploy succeeds.

Because the site lives at the `/Blog/` project-site path, set `site` and `base` in `astro.config.mjs`:

```js
export default defineConfig({
	site: 'https://grooms-by-kerrigan.github.io',
	base: '/Blog',
	// ...
});
```

See [Astro's GitHub Pages guide](https://docs.astro.build/en/guides/deploy/github/) for a ready-made workflow.

## 👀 Want to learn more?

Check out [Astro's documentation](https://docs.astro.build) or jump into the [Astro Discord server](https://astro.build/chat).

## Credit

This theme is based off of the lovely [Bear Blog](https://github.com/HermanMartinus/bearblog/).
