# andrew-zhang.ca

My personal site, built with [Astro](https://astro.build) and deployed to
GitHub Pages by the workflow in `.github/workflows/` on every push to `main`.

## Running it

```sh
npm install
npm run dev      # local dev server
npm run build    # static build into dist/
npm run preview  # serve the built site
```

## Layout

```
src/
  components/
    header, footer, navbar     site chrome
    tag-cell                   the coloured tag pill
    post-preview               blog listing card
    work-preview               project listing card
    theme-init                 blocking script that applies a painting's palette
  data/paintings.js            one entry per painting: image, mood, colour vars
  images/paintings/            painting originals, downscaled at build time
  layouts/
    base.astro                 the only file that renders <html>/<head>/<body>
    bloglayout.astro           base + a centred .content column
    worklayout.astro           used by every markdown file via `layout:`
  lib/posts.ts                 loading, sorting and tag helpers for the listings
  pages/
    index.astro                full-bleed painting hero (uses <Base bare>)
    about.astro                profile + "about me" modals
    blog/                      blog index (blablabla) and /blog/<tag> listings
    posts/*.md                 blog posts
    projects/                  project index (stuff) and /projects/<tag> listings
    stuff/*.md                 project write-ups
  styles/global.css            fallback palette, shared .surface card, utilities
```

## Adding a post

Drop a markdown file into `src/pages/posts/` (blog) or `src/pages/stuff/`
(projects) with this frontmatter:

```yaml
---
layout: ../../layouts/worklayout.astro
title: "Title"
date: "May 16 2025"
description: "Shown under the title and on the listing card"
tags: ["games"]
favourite: true # projects only: also pins it to the Favourites grid
---
```

Listings are ordered by filename descending, so a numeric or date prefix
(`001Mine.md`, `002gamesof2025.md`) controls what appears first. Tag pages are
generated automatically from the `tags` you use.

## Themes

`src/data/paintings.js` holds one entry per painting, each with a `mood`
(`dawn` / `day` / `dusk` / `night`) and a `vars` block of colours picked from
the painting. On the home page a painting is rolled at random from the bucket
matching the current time of day; other pages reuse that roll for the session.
Clicking **switch theme** pins a specific painting in `localStorage` until you
cycle again.

To add one: drop the image in `src/images/paintings/`, `import` it at the top
of `paintings.js`, and add an entry with every `vars` key the existing entries
have. Astro downscales it to 2400px webp at build time — the originals are
multi-megabyte photos, so keep them in `src/` and never in `public/`, which is
copied to the site verbatim. An image that isn't imported never enters the
build, so unwired paintings can sit in the folder harmlessly.
