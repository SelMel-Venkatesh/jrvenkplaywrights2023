import { test, chromium } from "@playwright/test";

test("To launch a Chrome Browser Instance", async () => {
  //to Laumcn the Chromium browser instance
  const browser = await chromium.launch({ headless: false, channel: "chrome" });
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto("https://login.salesforce.com/");
  await page.waitForTimeout(3000);
  await browser.close();

  console.log(
    "************************************************************************************************"
  );
});
