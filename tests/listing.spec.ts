import { test, expect } from "@playwright/test";

const LISTING_PAGES = [
  { path: "/listings/mulberry-tree-cottage.html", name: "Mulberry Tree Cottage" },
  { path: "/listings/daphne-tree-cottage.html", name: "Daphne Tree Cottage" },
  { path: "/listings/chestnut-tree-cottage.html", name: "Chestnut Tree Cottage" },
  { path: "/listings/enastron-guesthouse.html", name: "Enastron Guesthouse" },
  { path: "/listings/enastron-guest-room.html", name: "Enastron Guest Room" },
];

for (const listing of LISTING_PAGES) {
  test.describe(`Listing: ${listing.name}`, () => {
    test.beforeEach(async ({ page }) => {
      await page.goto(listing.path);
      // Wait for dynamic reviews to load
      await page
        .waitForSelector(".review-card", { timeout: 5000 })
        .catch(() => {
          /* reviews may not exist on every listing */
        });
      // Disable animations for deterministic screenshots
      await page.addStyleTag({
        content: `*, *::before, *::after {
          animation-duration: 0s !important;
          transition-duration: 0s !important;
        }`,
      });
    });

    test("full page screenshot", async ({ page }) => {
      await expect(page).toHaveScreenshot(
        `${listing.path.replace(/\//g, "-").slice(1)}-full.png`,
        { fullPage: true, maxDiffPixelRatio: 0.01 }
      );
    });

    test("booking sidebar visible as sticky card on desktop", async ({
      page,
      viewport,
    }) => {
      if (!viewport || viewport.width < 1024) {
        test.skip();
      }
      const sidebar = page.locator(".booking-sidebar");
      await expect(sidebar).toBeVisible();

      const position = await sidebar.evaluate((el) =>
        getComputedStyle(el).getPropertyValue("position")
      );
      expect(position).toBe("sticky");
    });

    test("booking sidebar hidden on mobile/tablet", async ({
      page,
      viewport,
    }) => {
      if (!viewport || viewport.width >= 1024) {
        test.skip();
      }
      const sidebar = page.locator(".booking-sidebar");
      await expect(sidebar).toBeHidden();
    });

    test("photo gallery is grid on desktop, carousel on mobile", async ({
      page,
      viewport,
    }) => {
      const gallery = page.locator(".gallery");
      const display = await gallery.evaluate((el) =>
        getComputedStyle(el).getPropertyValue("display")
      );

      if (viewport && viewport.width >= 768) {
        expect(display).toBe("grid");
      } else {
        expect(display).toBe("flex");
      }
    });

    test("listing header shows property name", async ({ page }) => {
      const heading = page.locator(".listing-header h1");
      await expect(heading).toBeVisible();
      await expect(heading).toHaveText(listing.name);
    });

    test("amenity pills are visible in header", async ({ page }) => {
      const pills = page.locator(".listing-header__amenities");
      await expect(pills).toBeVisible();
      const items = pills.locator(".listing-header__pill");
      expect(await items.count()).toBeGreaterThan(0);
    });
  });
}
