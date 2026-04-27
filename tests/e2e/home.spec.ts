import { test, expect } from '@playwright/test';

test('shows welcome banner, loads weather after search, and resets after removing city', async ({ page }) => {
  await page.goto('/');

  await expect(page.getByRole('heading', { name: /weather app/i })).toBeVisible();

  await expect(page.getByRole('heading', { name: /welcome/i })).toBeVisible();
  await expect(
    page.getByText(/search for a city in the search box/i)
  ).toBeVisible();

  await page.getByLabel(/search city/i).fill('Paris');
  await page.getByRole('button', { name: /search/i }).click();

  await expect(page.getByRole('heading', { name: /welcome/i })).not.toBeVisible();

  await expect(
    page.getByRole('heading', { name: /current weather/i })
  ).toBeVisible();

  await expect(
    page.getByRole('heading', { name: /next 12 hours/i })
  ).toBeVisible();

  await expect(
    page.getByRole('heading', { name: /daily forecast/i })
  ).toBeVisible();

  await page.getByRole('button', { name: /remove Paris/i }).click();

  await expect(page.getByRole('heading', { name: /welcome/i })).toBeVisible();

  await expect(
    page.getByRole('heading', { name: /current weather/i })
  ).not.toBeVisible();

  await expect(
    page.getByRole('heading', { name: /next 12 hours/i })
  ).not.toBeVisible();

  await expect(
    page.getByRole('heading', { name: /daily forecast/i })
  ).not.toBeVisible();
});