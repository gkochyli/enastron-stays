# Enastron Stays — Copilot Instructions

Static vacation rental website for 5 properties on Skopelos Island, Greece.
Pure HTML5, CSS3, vanilla JavaScript — no frameworks, no build tools, no runtime dependencies.

## Tech Stack

- **HTML5** with semantic elements, BEM class naming, JSON-LD structured data
- **CSS3** single stylesheet (`css/styles.css`) with custom properties design system
- **Vanilla JavaScript** (ES5-compatible IIFEs) — no modules, no imports
- **Playwright** for testing (desktop 1280×720, tablet 768×1024, mobile 375×667)
- **Google Fonts** via CDN: Playfair Display (headings) + Lato (body)
- **Dev server**: `npx serve -p 3000`

## File Structure

```text
index.html                        Homepage
listings/{property-slug}.html     5 listing detail pages
css/styles.css                    Single stylesheet (design system + all components)
js/prices.js                      Centralized pricing data object + DOM injection
js/reviews.js                     Centralized reviews data object + DOM injection
js/main.js                        Mobile nav, hero carousel, fade-in, carousel dots
js/gallery.js                     Photo gallery, lightbox, mobile carousel
images/{property-slug}/           hero.jpg + photo-1..4.jpg per property
images/skopelos/                  Island-wide imagery
tests/homepage.spec.ts            Homepage Playwright tests
tests/listing.spec.ts             Listing page tests (parameterized over all 5 properties)
```

## HTML Conventions

### Page Structure

- Homepage: `nav` → `hero` → `#properties` → `reviews` → `#about` → `footer`
- Listings: `nav` → gallery → `listing-content` (main + sidebar) → reviews → footer
- Scripts at bottom of `<body>` in dependency order: prices → reviews → main → gallery

### BEM Class Naming

Use `block__element--modifier` with `is-*` state classes:

```text
Block:     nav, hero, card, btn, listing-header, booking-sidebar, review-card,
           gallery, lightbox, footer, about, amenities, section-header
Element:   nav__inner, card__body, card__title, hero__slide, review-card__text
Modifier:  btn--primary, btn--secondary, btn--white, btn--airbnb, section--alt
State:     is-active, is-open, is-visible
```

### SEO and Meta Tags

Every page must include: charset, viewport, title, description, OG tags, Twitter card,
canonical URL, theme-color (`#757159`), favicon, preconnect to Google Fonts.

- Homepage: `Organization` JSON-LD
- Listings: `LodgingBusiness` + `BreadcrumbList` JSON-LD

### Accessibility

- `aria-label` on all interactive elements (buttons, nav, carousels)
- `aria-expanded` on hamburger toggle
- `aria-live="polite"` and `aria-roledescription="carousel"` on hero
- `aria-hidden="true"` on non-active hero slides
- `loading="lazy"` on below-fold images; `loading="eager"` on hero/first gallery
- Descriptive `alt` text on all images
- `rel="noopener noreferrer"` on external links

## CSS Conventions

### Design Tokens (Custom Properties)

```css
/* Colors (10 variables) */
--color-bg: #FAFAF5;              /* Cream background */
--color-bg-alt: #F0EDE6;          /* Alt section background */
--color-text: #2E3640;            /* Primary text */
--color-text-light: #5A6370;      /* Secondary text */
--color-olive: #757159;           /* Primary brand */
--color-olive-dark: #4A4838;      /* Footer background */
--color-terracotta: #A67B5B;      /* Accent */
--color-terracotta-light: #C09A7A;/* Accent hover */
--color-white: #FFFFFF;
--color-border: #D5D2C3;          /* Borders, inactive dots */

/* Typography */
--font-heading: 'Playfair Display', Georgia, serif;
--font-body: 'Lato', 'Helvetica Neue', Arial, sans-serif;
--fs-hero through --fs-xs          /* clamp() fluid scale */

/* Spacing: --space-xs (0.5rem) through --space-2xl (6rem) */
/* Layout: --max-width: 1200px, --border-radius: 8px / 16px */
/* Shadows: --shadow-sm / --shadow-md / --shadow-lg */
/* Transition: --transition: 0.3s ease */
```

### Breakpoints

| Breakpoint | Transition | Key Behavior |
|---|---|---|
| 767px / 768px | Mobile ↔ Tablet | Hamburger nav, scroll-snap carousels, gallery carousel |
| 1023px / 1024px | Tablet ↔ Desktop | Booking sidebar visible, 2-column listing layout |

### Stylesheet Organization

Single file ordered: Fonts → Custom Properties → Reset → Typography → Utilities →
Buttons → Nav → Hero → Cards → Section Headers → About → Footer → Listing Styles → Animations

## JavaScript Conventions

### Pattern Rules

- Every file wrapped in `(function () { 'use strict'; ... })();`
- Use `var` and `function` declarations (ES5-compatible)
- DOM queries: `document.querySelector()`, `document.querySelectorAll()`
- Guard pattern: early `return` if target element not found
- State toggling via CSS classes: `classList.toggle('is-open')`, `classList.add('is-active')`
- Event delegation with `e.target.closest()` for click handlers on container elements

### Data Architecture

- `PRICES` global object in `prices.js` — keyed by property slug, injected into `data-price` elements
- `ENASTRON_REVIEWS` global object in `reviews.js` — keyed by property slug, injected into `data-reviews` and `data-reviews-featured` containers
- Review cards and dots built via string concatenation HTML

### Interaction Patterns

- IntersectionObserver for fade-in (threshold 0.1) and carousel auto-play (threshold 0.3)
- setInterval for carousel auto-rotation (hero 6s, reviews/gallery 4s)
- Touch events: `touchstart` pauses, `touchend` resumes after 5s
- Debounced scroll handlers (50ms) for dot sync
- Lightbox supports keyboard (Escape, ArrowLeft, ArrowRight) and click-outside-to-close

## Testing Conventions

### Playwright Setup

- 3 viewport projects matching CSS breakpoints: desktop, tablet, mobile
- Dev server auto-launched: `npx serve -p 3000 --no-clipboard`
- Base URL: `http://localhost:3000`

### Test Patterns

- `beforeEach`: navigate, wait for dynamic content (`.review-card`), disable animations
- Animation disabling via injected `<style>` (`animation-duration: 0s !important`)
- Full-page screenshots with 1% tolerance (`maxDiffPixelRatio: 0.01`)
- Listing tests parameterized: loop over all 5 properties
- Screenshot tests skipped in CI (`--grep-invert "full page screenshot"`)

### After Making Visual Changes

Run `npm run test:update` to regenerate baseline screenshots, then `npm test` to verify.

## Commit Messages

Follow Conventional Commits with emoji footer:

```text
<type>: <short description under 100 bytes>

- bullet point details (0–5 items, optional)

<emoji> - Generated by Copilot
```

Types: `feat`, `fix`, `refactor`, `style`, `test`, `docs`, `build`, `chore`

## Key Rules

1. **No frameworks** — keep everything vanilla HTML/CSS/JS
2. **No new CSS files** — all styles go in `css/styles.css`
3. **No ES6 modules** — use IIFE + `'use strict'` pattern in JS files
4. **Use design tokens** — never hardcode colors, spacing, or fonts
5. **BEM naming** — follow existing `block__element--modifier` pattern
6. **Accessibility first** — aria attributes, lazy loading, descriptive alt text
7. **Mobile-first responsive** — test at all 3 breakpoints
8. **Update screenshots** after visual changes: `npm run test:update`
