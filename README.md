# Enastron — Skopelos Vacation Rentals

A static website showcasing 5 vacation rental properties (3 villas, 2 apartments) on Skopelos Island, Sporades, Greece.

## Design

- **Style**: Mediterranean minimalist
- **Colors**: White/cream, olive green, terracotta, sea blue
- **Typography**: Playfair Display (headings) + Lato (body) via Google Fonts
- **Responsive**: Mobile-first, works across all screen sizes

## Structure

```text
├── index.html                          # Homepage (hero + property grid)
├── css/styles.css                      # All styles (design system + components)
├── js/main.js                          # Mobile nav, scroll animations
├── js/gallery.js                       # Photo gallery lightbox
└── listings/
    ├── panormos-bay-villa.html         # Villa — Panormos Bay
    ├── kastani-sunset-villa.html       # Villa — Kastani
    ├── chora-olive-grove-villa.html    # Villa — Skopelos Town
    ├── glossa-view-apartment.html      # Apartment — Glossa
    └── staphylos-beach-apartment.html  # Apartment — Staphylos
```

## Local Preview

Open `index.html` in a browser, or serve locally:

```bash
# Python 3
python3 -m http.server 8000

# Then visit http://localhost:8000
```

## GitHub Pages Deployment

1. Push this repository to GitHub.
2. Go to **Settings → Pages**.
3. Under **Source**, select the `main` branch and `/` (root) directory.
4. Click **Save**. The site will be live at `https://<username>.github.io/enastron/`.

The `.nojekyll` file is included to prevent Jekyll processing.

## Customization

### Replacing Placeholder Content

- **Photos**: Replace the gradient `div` placeholders with `<img>` tags in each HTML file. Place images in the `images/` folder.
- **Descriptions**: Edit the text in the `<div class="description">` section of each listing page.
- **Prices & Reviews**: Update directly in the HTML.
- **Airbnb URLs**: Replace `https://www.airbnb.com/` in "Book on Airbnb" links with actual listing URLs.

### Color Palette

Edit CSS custom properties in `css/styles.css` under `:root` to adjust the color scheme.

## Tech Stack

- Pure HTML5, CSS3, JavaScript (ES6)
- No frameworks or build tools
- Google Fonts (CDN)
