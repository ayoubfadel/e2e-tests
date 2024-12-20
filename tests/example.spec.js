// @ts-check
const { test, expect } = require('@playwright/test');

test('has title', async ({ page }) => {
  await page.goto('/');
  await expect(page.locator('[data-test="header-title"]')).toHaveText("Testers & DevOps")
});
