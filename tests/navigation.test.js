// tests/automationintesting.spec.js
const { test, expect } = require('@playwright/test');

test.describe('Navigation - Test Cases', () => {
  const baseURL = 'https://automationintesting.online';

  test('TC_07_Navigation_Rooms', async ({ page }) => {
    await page.goto(baseURL);

    // Scroll to Rooms section using nav
    await page.locator('a.nav-link[href="/#rooms"]').click();
    const roomSection = page.locator('#contact');
    await expect(roomSection).toBeVisible();
  });

  test('TC_08_Navigation_Contact', async ({ page }) => {
  await page.goto(baseURL);

  // Click the Contact nav link
  await page.locator('a.nav-link[href="/#contact"]').click();

  // Wait for the Contact section to be visible
  const contactSection = page.locator('#contact');
  await expect(contactSection).toBeVisible();
 });
 test('TC_09_Navigation_Location', async ({ page }) => {
    await page.goto(baseURL);

    // Scroll to Rooms section using nav
    await page.locator('a.nav-link[href="/#location"]').click();
    const locationSection = page.locator('#location');
    await expect(locationSection).toBeVisible();
  });
});
