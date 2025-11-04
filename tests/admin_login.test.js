// tests/automationintesting.spec.js
const { test, expect } = require('@playwright/test');

test.describe('Admin Login - Test Cases', () => {
  const baseURL = 'https://automationintesting.online';

  test('TC_02_Login_Valid', async ({ page }) => {
    await page.goto(`${baseURL}/admin`);
    await page.fill('#username', 'admin');
    await page.fill('#password', 'password');
    await page.click('#doLogin');
    await expect(page).toHaveURL(/.*admin/);
  });

  test('TC_03_Login_Invalid', async ({ page }) => {
    await page.goto(`${baseURL}/admin`);
    await page.fill('#username', 'wronguser');
    await page.fill('#password', 'wrongpass');
    await page.click('#doLogin');
    await expect(page.locator('.alert-danger')).toBeVisible();
  });
});
