

import { test, expect } from '@playwright/test';

test('loads the app', async ({ page }) => {
  await page.goto('/');
  await expect(page.getByText('Testing')).toBeVisible();
});