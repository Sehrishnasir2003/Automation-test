// tests/automationintesting.spec.js
const { test, expect } = require('@playwright/test');

test.describe('Home Page Load - Test Case', () => {
  const baseURL = 'https://automationintesting.online';

  test('TC_01_HomePage_Title', async ({ page }) => {
    await page.goto(baseURL);
    await expect(page).toHaveTitle(/Restful-booker-platform demo/);
  });
});
