---
title: Enastron TODO
description: Tracked backlog of improvements and follow-up work for the Enastron vacation rental site
ms.date: 2026-03-21
---

## Backlog

Prioritized list of improvements identified through codebase analysis.

### High Priority

* [ ] **UX: Remove hero image blur** — The hero carousel applies
  `filter: blur(2px)` to every slide. For a vacation rental site, sharp
  aspirational photography is the biggest conversion driver. Remove the blur
  and let the images sell the properties.

* [ ] **UX: Add star ratings to property cards** — Properties have outstanding
  ratings (4.9–5.0) but they are invisible until a visitor clicks into a
  listing. Showing stars on each card provides immediate social proof.

* [ ] **UX: Add guest/bed/bath stats to property cards** — Guest count,
  bedrooms, and bathrooms are primary decision factors. A compact stat line
  like "4 guests · 1 bed · 1 bath" under each card lets visitors
  self-qualify without clicking in.

### Medium Priority

* [ ] **UX: Differentiate cottages vs. apartments** — The three rural
  cottages (€185–205, private pools) and two town apartments (€50–65) serve
  different audiences. Group them into two sections or add a filter/tab toggle
  so visitors can quickly find what fits.

* [ ] **UX: Add a location map** — For a remote island destination a map is
  essential. Show where Skopelos is, where properties sit relative to beaches
  and town, and how to get there (ferries, flights via Skiathos).

* [ ] **UX: Add trust attribution to reviews** — Reviews load from JS with no
  source attribution. Adding a small "Reviews from Airbnb" label with the
  Airbnb icon boosts credibility.

* [ ] **UX: Add visible breadcrumb navigation** — JSON-LD breadcrumbs exist
  but no visible breadcrumb trail appears on listing pages. A simple
  "Home > Property Name" bar above the gallery improves orientation.

* [ ] **UX: Remove auto-rotating carousels** — Both the gallery and reviews
  carousels auto-advance on timers. Auto-rotating carousels are a
  well-documented anti-pattern that disorients users. Keep swipe/click
  navigation, remove the timers.

### Low Priority

* [ ] **Cleanup: Move inline styles to CSS** — Every property card has
  `style="text-decoration:none; color:inherit;"` inline. Move this to the
  `.card` selector in `styles.css`.

* [ ] **UX: Enrich the Discover Skopelos section** — The about section is a
  wall of text. Add 3–4 icon-stats (beaches, chapels, Mamma Mia, greenest
  island) as a visual row above the prose for scannability.

* [ ] **UX: Add seasonal pricing context** — "From €185 / night" does not
  indicate whether it is a low-season or high-season rate. A small note like
  "Low-season rates shown" would set expectations.

* [ ] **UX: Consider a language toggle** — A Greek island site attracts
  German, French, Italian, and Scandinavian visitors. Even an EN/EL toggle
  would broaden appeal. Larger undertaking for the roadmap.

### Done

* [x] **SEO: Add robots.txt and sitemap.xml** — Created `robots.txt` (allow
  all, sitemap directive) and `sitemap.xml` with all 6 canonical URLs and
  lastmod dates at the site root.

* [x] **SEO: Add preconnect hints for Google Fonts** — Added
  `<link rel="preconnect">` for `fonts.googleapis.com` and
  `fonts.gstatic.com` to all 6 HTML pages to speed up font loading.

* [x] **SEO: Add og:locale, og:site_name, and theme-color** — Added
  `og:locale`, `og:site_name`, and `<meta name="theme-color">` to all 6
  pages.

* [x] **SEO: Add hero carousel alt text** — Replaced empty `alt=""` on all 5
  hero carousel images in `index.html` with descriptive text.

* [x] **SEO: Enrich JSON-LD structured data** — Added `aggregateRating`,
  `priceRange`, `amenityFeature`, `sameAs`, `@id`, `checkinTime`, and
  `checkoutTime` to all 5 listing `LodgingBusiness` schemas. Added `sameAs`
  to the homepage `Organization` schema. Added `BreadcrumbList` JSON-LD to
  all 5 listing pages.

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
