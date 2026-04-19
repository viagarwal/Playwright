import { test, expect } from '@playwright/test';
import { HomePage } from '../PageObject/HomePage';
import { LoginPage } from '../PageObject/LoginPage';



test("login to application", async ({page}) =>{
    await page.goto("https://www.amazon.in/");
    await expect(page).toHaveTitle("Online Shopping site in India: Shop Online for Mobiles, Books, Watches, Shoes and More - Amazon.in");
    const loginPage = new LoginPage(page);
    await loginPage.navigateToSiginPage();
    await loginPage.doLoginWithInvalidEmail("iet.vipul");
    await loginPage.doLoginWithValidEmail("iet.vipul@gmail.com");
});

test.skip("login to application with valid email", async ({page}) =>{
    const loginPage = new LoginPage(page);
    
});