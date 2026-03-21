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

* [ ] **Add SEO meta tags, favicon, and structured data** — All pages lack Open
  Graph tags, Twitter Card tags, canonical URLs, a favicon, and JSON-LD
  structured data. Adding these improves social sharing previews and search
  engine visibility.

### Low Priority

* [ ] **Improve gallery keyboard accessibility** — Gallery items are `<div>`
  elements with click handlers but no `role="button"` or `tabindex="0"`. The
  hero carousel lacks pause controls and an `aria-live` region. Address these
  gaps for basic keyboard and screen reader support.

### Done

* [x] **Replace About section placeholder with a real photo** — The "Discover
  Skopelos" section now uses `images/skopelos/island.jpg` instead of the
  previous CSS gradient placeholder.
