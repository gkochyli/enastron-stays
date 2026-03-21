import { test, expect } from "@playwright/test";

test.describe("Homepage", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
    // Wait for reviews to load (injected by reviews.js)
    await page.waitForSelector("[data-reviews-featured] .review-card", {
      timeout: 5000,
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
    await expect(page).toHaveScreenshot("homepage-full.png", {
      fullPage: true,
      maxDiffPixelRatio: 0.01,
    });
  });

  test("hero section is visible", async ({ page }) => {
    const hero = page.locator(".hero");
    await expect(hero).toBeVisible();
    await expect(hero.locator(".hero__title")).toHaveText(
      "Your Escape to Skopelos"
    );
  });

  test("property cards render in both categories", async ({ page }) => {
    const cottageCards = page
      .locator(".listings-grid")
      .first()
      .locator(".card");
    const apartmentCards = page
      .locator(".listings-grid")
      .nth(1)
      .locator(".card");
    await expect(cottageCards).toHaveCount(3);
    await expect(apartmentCards).toHaveCount(2);
  });

  test("navigation hamburger hidden on desktop, visible on mobile", async ({
    page,
    viewport,
  }) => {
    const hamburger = page.locator(".nav__hamburger");
    if (viewport && viewport.width > 768) {
      await expect(hamburger).toBeHidden();
    } else {
      await expect(hamburger).toBeVisible();
    }
  });

  test("nav links visible on desktop, hidden on mobile", async ({
    page,
    viewport,
  }) => {
    const navLinks = page.locator(".nav__links");
    if (viewport && viewport.width > 768) {
      await expect(navLinks).toBeVisible();
    } else {
      await expect(navLinks).toBeHidden();
    }
  });

  test("footer is visible with all sections", async ({ page }) => {
    const footer = page.locator(".footer");
    await expect(footer).toBeVisible();
    await expect(footer.locator(".footer__brand")).toHaveText("Enastron Stays");
  });

  test("card stats show guest/bed/bath info", async ({ page }) => {
    const firstStat = page.locator(".card__stats").first();
    await expect(firstStat).toBeVisible();
    await expect(firstStat).toContainText("guests");
    await expect(firstStat).toContainText("bed");
    await expect(firstStat).toContainText("bath");
  });
});
