# Enastron — Skopelos Vacation Rentals

A static website showcasing 5 vacation rental properties (3 cottages, 2 apartments) on Skopelos Island, Sporades, Greece.

## Design

- **Style**: Mediterranean minimalist
- **Colors**: Cream, olive green, terracotta
- **Typography**: Playfair Display (headings) + Lato (body) via Google Fonts
- **Responsive**: Mobile-first, works across all screen sizes

## Structure

```text
index.html                              # Homepage (hero + property grid)
css/styles.css                          # All styles (design system + components)
js/main.js                              # Mobile nav, hero carousel, fade-in, dots
js/gallery.js                           # Photo gallery, lightbox, mobile carousel
js/prices.js                            # Centralized pricing data + DOM injection
js/reviews.js                           # Centralized reviews data + DOM injection
listings/
  mulberry-tree-cottage.html            # Cottage — Mulberry Tree
  daphne-tree-cottage.html              # Cottage — Daphne Tree
  chestnut-tree-cottage.html            # Cottage — Chestnut Tree
  enastron-guesthouse.html              # Apartment — Enastron Guesthouse
  enastron-guest-room.html              # Apartment — Enastron Guest Room
images/{property-slug}/                 # hero.jpg + photo-1..4.jpg per property
images/skopelos/                        # Island-wide imagery
tests/
  homepage.spec.ts                      # Homepage Playwright tests
  listing.spec.ts                       # Listing page tests (all 5 properties)
playwright.config.ts                    # 3 viewport projects + dev server
.github/workflows/playwright.yml        # CI workflow
```

## Local Development

```bash
npm install          # Install Playwright + Husky
npx serve -p 3000    # Dev server
npm test             # Run all tests including screenshot comparisons
npm run test:update  # Regenerate baseline screenshots after visual changes
```

## GitHub Pages Deployment

1. Push this repository to GitHub.
2. Go to **Settings → Pages**.
3. Under **Source**, select the `main` branch and `/` (root) directory.
4. Click **Save**. The site will be live at `https://<username>.github.io/enastron/`.

The `.nojekyll` file is included to prevent Jekyll processing.

## Customization

### Color Palette

Edit CSS custom properties in `css/styles.css` under `:root` to adjust the color scheme.

### Pricing & Reviews

Update the `PRICES` object in `js/prices.js` and `ENASTRON_REVIEWS` object in `js/reviews.js`.

## Tech Stack

- Pure HTML5, CSS3, vanilla JavaScript (ES5-compatible IIFEs)
- No frameworks or build tools
- Google Fonts (CDN)
- Playwright for testing
