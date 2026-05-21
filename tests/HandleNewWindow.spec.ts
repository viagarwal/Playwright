import { expect, test } from "@playwright/test";

test("@Web handle new window", async ({ page }) => {
    await page.goto("https://demoqa.com/browser-windows");
    const newWindow = page.locator("button#windowButton");
    const [newPage] = await Promise.all([
        page.waitForEvent("popup"),
        newWindow.click()
    ]);
    console.log("New page URL is : " + newPage.url());
    console.log("New page title is : " + await newPage.title());
    await expect(newPage).toHaveURL(/sample/);
    await newPage.close();
    await expect(page).toHaveURL("https://demoqa.com/browser-windows");
    //playwright has one locator pressSequentially which will enter value value one by one 
    //instead of use fill we can use pressSequentially and it will enter value one by one with delay of 100ms


});