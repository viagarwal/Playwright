import { test, expect } from '@playwright/test';
import { HomePage } from '../PageObject/HomePage';
import { LoginPage } from '../PageObject/LoginPage';
import testData from '../testdata/DataDriven.json';


for (const data of testData) {
    test(`login to application with data: ${data.username}`, async ({page}) =>{
        await page.goto(data.url);
        await expect(page).toHaveTitle("Online Shopping site in India: Shop Online for Mobiles, Books, Watches, Shoes and More - Amazon.in");
        const loginPage = new LoginPage(page);
        await loginPage.navigateToSiginPage();
        await loginPage.doLoginWithInvalidEmail("iet.vipul");
        await loginPage.doLoginWithValidEmail(data.username);
    });
}

test.skip("login to application with valid email", async ({page}) =>{
    const loginPage = new LoginPage(page);
    
});