import {test} from '@playwright/test';

test("check scroll", async ({ page }) => {  

    await page.goto("https://www.amazon.in/");
    await page.waitForLoadState("load");
    await page.waitForSelector("select#searchDropdownBox"); 
    await page.evaluate(() => {
        window.scrollBy(0, 500);
    });
    await page.waitForTimeout(2000);
    await page.evaluate(() => {
        window.scrollBy(0, -500);
    });
    await page.waitForTimeout(2000);
    await page.evaluate(() => {
        window.scrollTo(0, document.body.scrollHeight);
    });
    await page.waitForTimeout(2000);        
    await page.evaluate(() => {
        window.scrollTo(0, 0);
    });
    await page.waitForTimeout(2000);        
}   );

