// tests/automationintesting.spec.js
const { test, expect } = require('@playwright/test');

test.describe('Room Booking - Test Case', () => {
  const baseURL = 'https://automationintesting.online';

  test('TC_10_BookRoom_Valid', async ({ page }) => {
    test.setTimeout(60000); // Increased timeout

    await page.goto(baseURL);

    // Navigate to rooms section
    await page.locator('#navbarNav').getByRole('link', { name: 'Rooms' }).click();
    await page.waitForURL(/rooms/);

    // Click "Book This Room" for the first available room
    await page.locator('div').filter({ hasText: /^£150 per nightBook now$/ })
                  .getByRole('link', { name: 'Book now' }).click();
    
    // Wait for booking form to be visible
    await page.getByText('Book This Room£150per').waitFor();
    page.getByRole('button', { name: 'Reserve Now' }).click();
    // Fill out booking form
    await page.getByRole('textbox', { name: 'Firstname' }).fill('John');
    await page.getByRole('textbox', { name: 'Lastname' }).fill('Doe');
    await page.getByRole('textbox', { name: 'Email' }).fill('john.doe@example.com');
    await page.getByRole('textbox', { name: 'Phone' }).fill('12345678903');

    await page.getByRole('button', { name: 'Reserve Now' }).click();
    


    // PROPER CONFIRMATION MODAL VERIFICATION
    const confirmationModal = page.locator('.card-body:has-text("Booking Confirmed")');
    await confirmationModal.waitFor({ state: 'visible', timeout: 10000 });

  });
});
