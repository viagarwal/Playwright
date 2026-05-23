import { test, expect } from '@playwright/test';

test('GET Users API', async ({ request }) => {

const baseUrl = 'https://reqres.in/api';

 const response = await request.get(`${baseUrl}/users/1`);
console.log('Response :', response.status);  
 expect(response.status()).toBe(200);
 const responseBody=response.json();
  expect(responseBody).toBeTruthy();
  console.log('Response Body:', responseBody);  
});