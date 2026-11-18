# Grooms by Kerrigan

An editorial grooming journal built with [Astro](https://astro.build), Markdown/MDX, and deployed to GitHub Pages.

## Local development

Requires Node.js 22.12 or newer.

```sh
npm ci
npm run dev
```

Create a production build with `npm run build` and preview it with `npm run preview`.

## Publishing an article

Add a `.md` or `.mdx` file to `src/content/blog/`. The filename becomes its URL slug.

```md
---
title: "A fresh start for spring"
description: "A short introduction shown on article cards and search previews."
pubDate: 2026-11-16
category: "Grooming inspiration"
tags: ["coat care", "seasonal"]
featured: true
heroImage: "https://example.com/your-photo.jpg"
draft: false
---

Your article begins here. Use Markdown headings, links, lists, and images as needed.
```

Optional frontmatter includes `updatedDate`, `breed` (`Doodle`, `Spaniel`, or `Small breed`), `breedName`, `before`, `after`, and a `notes` map for grooming details. Posts are ordered newest first. Drafts are excluded from production builds.

Use a local image in `src/assets/` for Astro image optimization, or a fully qualified image URL for a remotely hosted photo.

## Editorial categories

Suggested categories include Grooming inspiration, Breed guides, Tips & techniques, Before & after, Grooming education, and Studio journal. Categories and tags are editorial metadata rather than fixed page types.

## Design

Edit the CSS custom properties at the top of `src/styles/global.css` to update the emerald-green palette, typography, and content width.

## GitHub Pages

The site is configured for the project URL `https://grooms-by-kerrigan.github.io/Blog/` in `astro.config.mjs`. The GitHub Actions workflow builds the site on pull requests targeting `main`, and deploys the generated `dist/` folder only after pushes to `main`.

Set the repository's Pages source to **GitHub Actions** under **Settings → Pages**.
