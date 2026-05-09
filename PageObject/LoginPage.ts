import { expect, Locator, Page } from "@playwright/test";

export class LoginPage {
    page: Page;
    AccountAndListLink: Locator;
    SignInLink: Locator;
    EmailId: Locator;
    ContinueBtn: Locator;
    errortxt: Locator;
    //format script shift+alt+f



    constructor(page: Page) {
        this.page = page;
        this.AccountAndListLink = page.locator("a[data-csa-c-content-id='nav_ya_signin']");
        this.SignInLink = page.locator("div#nav-link-accountList");
        this.EmailId = page.locator("input[name='email']");
        this.ContinueBtn = page.locator("input[type='submit']");
        this.errortxt = page.locator("div#invalid-email-alert")

    }


    async navigateToSiginPage() {
        await this.AccountAndListLink.hover();
        await this.SignInLink.click();
    }



    async doLoginWithInvalidEmail(username: string) {
        await this.EmailId.fill(username);
        await this.ContinueBtn.click();
        let errorText =  await this.errortxt.textContent();
        console.log("Error Text is : " + errorText);
        await expect(this.errortxt).toHaveText("Invalid email address");
        await expect(this.errortxt).toContainText("Invalid email address");
    }

     async doLoginWithValidEmail(username: string) {
        await this.EmailId.fill(username);
        await this.ContinueBtn.click();
        await this.page.waitForLoadState('load');   
    }


}