import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('/');
});

test('la página muestra el título', async ({ page }) => {
  await expect(page.getByRole('heading', { name: 'Cartelera de cine' })).toBeVisible();
});

test('hay un botón para iniciar sesión', async ({ page }) => {
  await expect(page.getByRole('button', { name: 'Iniciar sesión' })).toBeVisible();
});

test('al iniciar sesión se muestra el saludo', async ({ page }) => {
  await page.getByRole('button', { name: 'Iniciar sesión' }).click();
  await expect(page.getByText('¡Bienvenido!')).toBeVisible();
});
