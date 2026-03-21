---
title: Enastron TODO
description: Tracked backlog of improvements and follow-up work for the Enastron vacation rental site
ms.date: 2026-03-21
---

## Backlog

Prioritized list of improvements identified through codebase analysis.

### High Priority

* [ ] **Fix lightbox on listing pages** — `gallery.js` targets `#lightbox`,
  `#lightboxImage`, and related elements that don't exist in any listing page
  markup. The "Show all photos" button silently fails on all five listings.
  Add the missing lightbox HTML and fix `updateLightboxImage()` so it sets a
  real image `src` instead of CSS gradients.

* [ ] **Add lazy loading to below-fold images** — All ten images on the landing
  page (five hero carousel slides plus five property card images) load eagerly.
  Only one hero slide is visible at a time; the remaining four slides and all
  card images should use `loading="lazy"` for a straightforward performance win.

### Medium Priority

(empty)

### Low Priority

* [ ] **Improve gallery keyboard accessibility** — Gallery items are `<div>`
  elements with click handlers but no `role="button"` or `tabindex="0"`. The
  hero carousel lacks pause controls and an `aria-live` region. Address these
  gaps for basic keyboard and screen reader support.

### Done

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
