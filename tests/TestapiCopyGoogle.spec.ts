import { test, expect } from '@playwright/test';
import { Google } from '../api/Google';



test('should fetch business date successfully', async ({ request }) => {
    const api = new Google();
    await api.getGoogleData(request);
 
});
