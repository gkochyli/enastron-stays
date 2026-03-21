---
title: Enastron TODO
description: Tracked backlog of improvements and follow-up work for the Enastron vacation rental site
ms.date: 2026-03-21
---

## Backlog

Prioritized list of improvements identified through codebase analysis.

### High Priority

(empty)

### Medium Priority

(empty)

### Low Priority

(empty)

### Done

* [x] **Fix lightbox on listing pages** — Added lightbox HTML markup to all
  five listing pages and fixed `gallery.js` to use real `<img>` `src` values
  instead of CSS gradients. The "Show all photos" button and gallery clicks
  now open a working lightbox.

* [x] **Add lazy loading to below-fold images** — Added `loading="lazy"` to
  the four inactive hero carousel slides and all five property card images
  on `index.html`.

* [x] **Improve gallery keyboard accessibility** — Gallery items now have
  `role="button"` and `tabindex="0"` (set via JS). Enter and Space keys
  activate the lightbox. Hero carousel has `aria-live="polite"`,
  `aria-roledescription="carousel"`, and an `aria-label`.

* [x] **Add Open Graph meta tags** — Added `og:title`, `og:description`,
  `og:image`, `og:url`, and `og:type` to `index.html` and all five listing
  pages.

* [x] **Add Twitter Card meta tags** — Added `summary_large_image` cards with
  `twitter:card`, `twitter:title`, `twitter:description`, and `twitter:image`
  to all six pages.

* [x] **Add canonical URLs** — Added `<link rel="canonical">` to `index.html`
  and all five listing pages.

* [x] **Add a favicon** — Created `images/favicon.svg` (olive-green "E" icon)
  and referenced it via `<link rel="icon">` on all six pages.

* [x] **Add JSON-LD structured data** — Added `Organization` schema to
  `index.html` and `LodgingBusiness` schema (with address, geo, image) to
  all five listing pages.

* [x] **Replace About section placeholder with a real photo** — The "Discover
  Skopelos" section now uses `images/skopelos/island.jpg` instead of the
  previous CSS gradient placeholder.
