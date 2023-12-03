import { test, chromium } from "@playwright/test";

test("To launch a Chrome Browser Instance", async () => {
  //to Laumcn the Chromium browser instance
  const browser = await chromium.launch({ headless: false, channel: "chrome" });
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto("https://login.salesforce.com/");
  await page.waitForTimeout(3000);
  page.locator("xpath=//input[@id='username']").fill("jrvenk@gmail.com");
  await page.waitForTimeout(3000);
  page.locator("xpath=//input[@id='password']").fill("1984@Rvenkatesh");
  await page.waitForTimeout(3000);
  page.locator("xpath=//input[@id='Login']").click();

  await page.waitForTimeout(10000);
  console.log(
    "************************************************************************************************"
  );
  console.log("get Title : " + (await page.title()));
  console.log(
    "************************************************************************************************"
  );
  console.log("get URL : " + (await page.url()));
  await browser.close();

  console.log(
    "************************************************************************************************"
  );
});
