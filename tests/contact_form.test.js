// tests/automationintesting.spec.js
const { test, expect } = require('@playwright/test');

test.describe('Contact Form - Test Cases', () => {
  const baseURL = 'https://automationintesting.online';
  test('TC_04_Contact_Valid', async ({ page }) => {
  await page.goto(`${baseURL}`);
  // Fill in contact form
  await page.fill('#name', 'John Doe');
  await page.fill('#email', 'john@example.com');
  await page.fill('#phone', '12345678903');
  await page.fill('#subject', 'Test Subject');
  await page.fill('#description', 'This is a test message for booking a family room.');

  // Submit the form
  await page.getByRole('button', { name: 'Submit' }).click();

  // Wait for success section to appear
  const successSection = page.locator('#contact .card-body');

  // Assert heading
  const heading = successSection.locator('h3');
  await expect(heading).toHaveText('Thanks for getting in touch John Doe!');

  // Assert subject is echoed back
  const subjectText = successSection.locator('p >> nth=1'); // second <p> tag inside .card-body
  await expect(subjectText).toHaveText('Test Subject');
});

  test('TC_05_Contact_MissingFields', async ({ page }) => {
    await page.goto(baseURL);
    await page.fill('#email', 'john.doe@example.com');
    await page.getByRole('button', { name: 'Submit' }).click();
    await expect(page.locator('.alert.alert-danger')).toBeVisible();
  });

  test('TC_06_Contact_InvalidEmail', async ({ page }) => {
    await page.goto(baseURL);
    await page.fill('#name', 'Jane Doe');
    await page.fill('#email', 'invalid-email');
    await page.fill('#phone', '12345678903');
    await page.fill('#subject', 'Test Subject');
    await page.fill('#description', 'Invalid email test.');
    await page.getByRole('button', { name: 'Submit' }).click();
    await expect(page.locator('.alert.alert-danger')).toBeVisible();
  });
 
});
