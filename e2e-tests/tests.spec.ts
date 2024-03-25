import { test, expect, type Page } from '@playwright/test';
import path from 'path';
import dotenv from 'dotenv';

import { trendingApiUrl } from '@/utils/apiConstants';

dotenv.config({
  path: path.resolve(__dirname, '..', '.env.local'),
});

const awaitHomePage = async ({ page }: { page: Page }) =>
  await page.goto('http://localhost:3000/');

const getByTestIdAndClick = async ({
  page,
  testId,
}: {
  page: Page;
  testId: string;
}) => {
  const item = page.getByTestId(testId);
  await expect(item).toBeVisible();
  return await item.click();
};

test('Has title', async ({ page }) => {
  await awaitHomePage({ page });

  await expect(page).toHaveTitle(/Sinopsis web/);
});

test('Has redirection to trending', async ({ page }) => {
  await awaitHomePage({ page });

  await getByTestIdAndClick({ page, testId: 'trending-link' });

  await page.waitForURL('**/trending');
  await expect(page).toHaveURL(/trending/);
});

test('Has redirection back to home page', async ({ page }) => {
  await awaitHomePage({ page });

  await getByTestIdAndClick({ page, testId: 'trending-link' });

  await page.waitForURL('**/trending');
  await expect(page).toHaveURL(/trending/);

  await getByTestIdAndClick({ page, testId: 'back-button' });

  await expect(page).not.toHaveURL(/trending/);
});

test('Has redirection to trending and wait items from api', async ({
  page,
  request,
}) => {
  await awaitHomePage({ page });

  await getByTestIdAndClick({ page, testId: 'trending-link' });

  await page.waitForURL('**/trending');
  await expect(page).toHaveURL(/trending/);

  const trendingApiCall = await request.get(trendingApiUrl('all'));

  expect(trendingApiCall.ok()).toBeTruthy();
  expect(expect.objectContaining(await trendingApiCall.json())).toEqual(
    expect.objectContaining({
      page: expect.anything(),
      results: expect.anything(),
      total_pages: expect.anything(),
      total_results: expect.anything(),
    })
  );
});
