import { test, expect } from '@playwright/test';

test('should fetch business date successfully', async ({ request }) => {
    const url = 'https://www.google.com/';

    // Await the request so Playwright waits for the network call to complete
    const response = await request.get(url);

    console.log('Status:', response.status());
    console.log('Status Text:', response.statusText());

    // Try to parse as JSON; if not JSON, print text (truncate large output)
    try {
        const json = await response.json();
        console.log('JSON Body:', json);
    } catch {
        const text = await response.text();
        console.log('Response Text:', text.slice(0, 500));
    }

    expect(response.ok()).toBeTruthy();
});
