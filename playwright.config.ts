import { defineConfig, devices } from '@playwright/test';

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// import dotenv from 'dotenv';
// import path from 'path';
// dotenv.config({ path: path.resolve(__dirname, '.env') });

/**
 * See https://playwright.dev/docs/test-configuration.
 */
export default defineConfig({
  testDir: './tests',
  globalSetup: './global-setup/setup.ts',
  globalTeardown: './global-setup/teardown.ts',
  retries: 2,
  workers: 4,
  timeout: 30 * 1000,
  expect: {
    timeout: 20 * 1000,
  },
  reporter: "html",
  projects: [
    {
      name: "chromium",
      use: {
        browserName: "chromium",
        headless: false,
        ignoreHTTPSErrors: true,
        screenshot: 'only-on-failure',
        permissions: ['geolocation'],
        trace: 'on',
        launchOptions: {
          // 1
          args: ["--start-maximized"],
        },
        viewport: null, //open browser in full screen mode
      },
    },
    {
      name: "firefox",
      use: { 
        browserName: "firefox",
        headless: false,
        screenshot: 'only-on-failure',
        trace: 'on',
        launchOptions: {
          // 1
          args: ["--start-maximized"],
        },
        viewport: null,

      },
    },
      {
        name: "Samsung Galaxy S20 Ultra",
        use: {
          browserName: "chromium",
          headless: true,
          ignoreHTTPSErrors: true,
          screenshot: 'only-on-failure',
          trace: 'on',
          launchOptions: {
            // 1
            args: ["--start-maximized"],
          },
          // viewport: null, //open browser in full screen mode
          ...devices['SamSung Galaxy S20 Ultra  - 6.9 inch  - Android 10 - 3200x1440  - Chrome  83  - 4G - 12GB RAM - 512GB Storage'],
        },
      },
  ]
  // use: {
  //   browserName: "chromium",
  //   headless: false,
  //   screenshot:'only-on-failure',
  //   trace: 'on',
  //   launchOptions: {
  //     // 1
  //     args: ["--start-maximized"],
  //   },
  //   viewport: null,
  // },


});
