import { chromium, FullConfig } from '@playwright/test';

async function globalSetup(config: FullConfig) {
  console.log('global setup');
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.goto('https://www.amazon.in/');
}

export default globalSetup;