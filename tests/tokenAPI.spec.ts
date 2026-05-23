import { test, expect } from '@playwright/test';
import { TokenAPI } from '../api/TokenAPI';

test.describe('Token API - POST Request', () => {
  test('should fetch token successfully with basic authentication', async ({ request }) => {
    const api = new TokenAPI();
    const response = await api.getToken(request);

    // Assertions
    expect(response.status).toBeLessThan(400);
    expect(response.statusText).toBeDefined();
    expect(response.data).toBeTruthy();
    expect(response.headers).toBeDefined();

    console.log('Token Status:', response.status);
    console.log('Token Status Text:', response.statusText);
    console.log('Token Response Data:', response.data);
    console.log('Response Headers:', response.headers);
  });

  test('should return 2xx success status code', async ({ request }) => {
    const api = new TokenAPI();
    const response = await api.getToken(request);

    expect(response.status).toBeGreaterThanOrEqual(200);
    expect(response.status).toBeLessThan(300);
  });

  test('should return valid response with token data', async ({ request }) => {
    const api = new TokenAPI();
    const response = await api.getToken(request);

    expect(response.data).toBeDefined();
    expect(typeof response.data).not.toBe('undefined');
  });

  test('should include required headers in request', async ({ request }) => {
    const api = new TokenAPI();
    const response = await api.getToken(request);

    // Response headers should be present
    expect(Object.keys(response.headers).length).toBeGreaterThan(0);
    
    console.log('All Response Headers:', response.headers);
  });

  test('direct POST call with basic auth headers', async ({ request }) => {
    const baseURL = 'http://marcu2a.hospility-apiUs.com';
    const resource = '/oath/vi/tokens/';
    
    const credentials = 'vipul:agarwal';
    const encodedCredentials = Buffer.from(credentials).toString('base64');
    const basicAuth = `Basic ${encodedCredentials}`;

    const response = await request.post(`${baseURL}${resource}`, {
      headers: {
        'x-appkey': 'abc',
        'enterpriseid': '1234',
        'Authorization': basicAuth,
        'Content-Type': 'application/json'
      },
      data: {
        grant_type: 'abc',
        scope: 'cde'
      }
    });

    console.log('Direct POST Status:', response.status());
    console.log('Direct POST Status Text:', response.statusText());

    let responseBody: any;
    try {
      responseBody = await response.json();
      console.log('Direct POST Response Body:', responseBody);
    } catch {
      responseBody = await response.text();
      console.log('Direct POST Response Text:', responseBody);
    }

    expect(response.ok()).toBeTruthy();
  });
});
