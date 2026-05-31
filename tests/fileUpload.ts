import { test } from "@playwright/test";

test("check file upload", async ({ page }) => {
    await page.goto("https://www.file.io/");
    await page.waitForLoadState("load");
    const filePath = "C:\\Users\\Admin\\Desktop\\test.txt";
    await page.setInputFiles("input[type='file']", filePath);
    await page.waitForTimeout(2000);
    page.waitForEvent("filechooser").then((fileChooser) => {
        fileChooser.setFiles(filePath);
    });
});
