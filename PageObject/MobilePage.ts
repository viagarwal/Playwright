import {Locator, Page} from "@playwright/test";

export class MobilePage{
    mobileLink: Locator;
    page :Page;


    constructor(page: any){
        this.page = page
        this.mobileLink= page.locator("a[href*='nav_cs_mobiles']")

    }

    async clickOnMobileLink(){
        await this.mobileLink.click();
    }
        
}
