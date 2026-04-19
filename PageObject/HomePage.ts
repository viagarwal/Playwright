import {Locator, Page} from "@playwright/test";
import { MobilePage } from "./MobilePage";



export class HomePage {

    mobilePage: MobilePage;

    constructor(page: any) {
        this.mobilePage = new MobilePage(page);
        
    }

    async clickOnMobileLink() {
        await this.mobilePage.clickOnMobileLink();
    }

}