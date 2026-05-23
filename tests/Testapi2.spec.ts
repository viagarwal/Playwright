import test, { APIRequestContext, request } from '@playwright/test';



test('should fetch business date successfully', async () => {
    const apiRequestContext = await request.newContext();   
    const response = await apiRequestContext.get("https://www.google.com/");
    console.log('Status:', response.status());  
    console.log('Status Text:',  response.statusText());
});
