import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  // Falla si quedó un test.only olvidado (solo en CI)
  forbidOnly: !!process.env.CI,
  retries: 0,

  // Reporte HTML en ./playwright-report: es la carpeta que sube el workflow como artifact
  reporter: [['html', { outputFolder: 'playwright-report', open: 'never' }]],

  use: {
    baseURL: 'http://localhost:4200',
    trace: 'retain-on-failure',
  },

  // Playwright levanta la app solo (en local y en el runner de GitHub)
  webServer: {
    command: 'npm start',
    url: 'http://localhost:4200',
    reuseExistingServer: !process.env.CI,
  },

  projects: [{ name: 'chromium', use: { ...devices['Desktop Chrome'] } }],
});
