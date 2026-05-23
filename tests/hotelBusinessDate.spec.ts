import { test, expect } from '@playwright/test';
import { HotelAPI } from '../api/HotelAPI';

test.describe('Hotel Business Date API', () => {
  test('should return business date for HNMMC hotel', async ({ request }) => {
    const api = new HotelAPI();
    const response = await api.getBusinessDate(request);

    expect(response.status).toBe(200);
    expect(response.data).toBeTruthy();
    expect(response.headers).toBeDefined();

    console.log('Business date response:', response.data);
  });
});
