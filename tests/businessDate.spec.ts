import { test, expect } from '@playwright/test';
import { BusinessDateAPI } from '../api/BusinessDateAPI';

test.describe('Business Date API', () => {
  test('GET /bof/v1/hotels/HNMMC/businessDate returns success and body', async ({ request }) => {
    const api = new BusinessDateAPI();
    const res = await api.getBusinessDate(request);

    console.log('Status:', res.status);
    console.log('Status Text:', res.statusText);
    console.log('Response Data:', res.data);

    expect(res.status).toBeLessThan(400);
    expect(res.data).toBeTruthy();
    expect(res.headers).toBeDefined();
  });
});
