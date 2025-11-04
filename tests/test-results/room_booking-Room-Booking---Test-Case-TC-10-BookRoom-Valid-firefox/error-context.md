# Test info

- Name: Room Booking - Test Case >> TC_10_BookRoom_Valid
- Location: D:\Automation Test\tests\room_booking.test.js:7:3

# Error details

```
TimeoutError: locator.waitFor: Timeout 10000ms exceeded.
Call log:
  - waiting for locator('.card-body:has-text("Booking Confirmed")') to be visible

    at D:\Automation Test\tests\room_booking.test.js:35:29
```

# Page snapshot

```yaml
- 'heading "Application error: a client-side exception has occurred while loading automationintesting.online (see the browser console for more information)." [level=2]'
```

# Test source

```ts
   1 | // tests/automationintesting.spec.js
   2 | const { test, expect } = require('@playwright/test');
   3 |
   4 | test.describe('Room Booking - Test Case', () => {
   5 |   const baseURL = 'https://automationintesting.online';
   6 |
   7 |   test('TC_10_BookRoom_Valid', async ({ page }) => {
   8 |     test.setTimeout(60000); // Increased timeout
   9 |
  10 |     await page.goto(baseURL);
  11 |
  12 |     // Navigate to rooms section
  13 |     await page.locator('#navbarNav').getByRole('link', { name: 'Rooms' }).click();
  14 |     await page.waitForURL(/rooms/);
  15 |
  16 |     // Click "Book This Room" for the first available room
  17 |     await page.locator('div').filter({ hasText: /^£150 per nightBook now$/ })
  18 |                   .getByRole('link', { name: 'Book now' }).click();
  19 |     
  20 |     // Wait for booking form to be visible
  21 |     await page.getByText('Book This Room£150per').waitFor();
  22 |     page.getByRole('button', { name: 'Reserve Now' }).click();
  23 |     // Fill out booking form
  24 |     await page.getByRole('textbox', { name: 'Firstname' }).fill('John');
  25 |     await page.getByRole('textbox', { name: 'Lastname' }).fill('Doe');
  26 |     await page.getByRole('textbox', { name: 'Email' }).fill('john.doe@example.com');
  27 |     await page.getByRole('textbox', { name: 'Phone' }).fill('12345678903');
  28 |
  29 |     await page.getByRole('button', { name: 'Reserve Now' }).click();
  30 |     
  31 |
  32 |
  33 |     // PROPER CONFIRMATION MODAL VERIFICATION
  34 |     const confirmationModal = page.locator('.card-body:has-text("Booking Confirmed")');
> 35 |     await confirmationModal.waitFor({ state: 'visible', timeout: 10000 });
     |                             ^ TimeoutError: locator.waitFor: Timeout 10000ms exceeded.
  36 |
  37 |   });
  38 | });
  39 |
```