import { expect, Locator, Page, test } from "@playwright/test";


test("check select dropdown", async ({ page }) => {
    await page.goto("https://www.amazon.in/");
    const dropdown = page.locator("select#searchDropdownBox");
    let dropDownCount = await dropdown.count();
    console.log("DropDown count is : " + dropDownCount);
    for (let i = 0; i < dropDownCount; i++) {
        let dropDownText = await dropdown.nth(i).textContent();
        console.log("DropDown Text is : " + dropDownText);
    }
    await dropdown.selectOption("search-alias=computers");
    expect(await dropdown.inputValue()).toBe("search-alias=computers");
    expect(dropdown).toHaveValue("search-alias=computers");
    await page.pause()
        // await dropdown.selectOption("search-alias=electronics");

});