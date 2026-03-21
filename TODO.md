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

* [ ] **Add Open Graph meta tags** — No page has `og:title`, `og:description`,
  `og:image`, or `og:url` tags. Add them to `index.html` (use the
  hero/Skopelos image) and each listing page (use that listing's hero image).
  This fixes blank previews when links are shared on Facebook, iMessage,
  Slack, etc.

* [ ] **Add Twitter Card meta tags** — No page has `twitter:card`,
  `twitter:title`, `twitter:description`, or `twitter:image`. Add
  `summary_large_image` cards to all six pages, reusing the same titles,
  descriptions, and images chosen for OG tags.

* [ ] **Add canonical URLs** — No page has a `<link rel="canonical">` tag.
  Add one to each page pointing to its canonical `https://` URL. This
  prevents search engines from indexing duplicate URLs (e.g., with/without
  trailing slashes or query strings).

* [ ] **Add a favicon** — No `<link rel="icon">` exists on any page. Create
  or source a small Enastron brand icon and reference it in every `<head>`.
  Without a favicon the browser shows a generic blank tab icon and logs a
  404 for `/favicon.ico`.

* [ ] **Add JSON-LD structured data** — No page has `<script
  type="application/ld+json">`. Add `VacationRental` (or `LodgingBusiness`)
  schema to each listing page with name, description, image, address, and
  geo coordinates. Add an `Organization` schema to `index.html`. This
  enables rich results in Google Search.

### Low Priority

* [ ] **Improve gallery keyboard accessibility** — Gallery items are `<div>`
  elements with click handlers but no `role="button"` or `tabindex="0"`. The
  hero carousel lacks pause controls and an `aria-live` region. Address these
  gaps for basic keyboard and screen reader support.

### Done

* [x] **Replace About section placeholder with a real photo** — The "Discover
  Skopelos" section now uses `images/skopelos/island.jpg` instead of the
  previous CSS gradient placeholder.
