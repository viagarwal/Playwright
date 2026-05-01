import { Page,expect, test } from "@playwright/test";

test("check radio button", async ({ page }) => {
    await page.goto("https://www.amazon.in/");
    // await page.locator("input[type='radio']").click();
    // expect(page.locator("input[type='radio']")).toBeChecked();


    // const radioBtn = page.locator("input[type='radio']");
    // let radioBtnCount = await radioBtn.count();
    // console.log("Radio Button count is : " + radioBtnCount);
})
