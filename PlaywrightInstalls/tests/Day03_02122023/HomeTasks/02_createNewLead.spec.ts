import { test, chromium } from "@playwright/test";

test("To launch a Chrome Browser Instance", async () => {
  //to Laumcn the Chromium browser instance
  const browser = await chromium.launch({ headless: false, channel: "chrome" });
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto("http://leaftaps.com/opentaps/control/main");
  await page.waitForLoadState("load");
  await page.locator("xpath=//input[@id='username']").fill("Demosalesmanager");
  await page.locator("xpath=//input[@id='password']").fill("crmsfa");
  await page.locator("xpath=//input[@class='decorativeSubmit']").click();
  await page.waitForLoadState("load");

  console.log(
    "************************************************************************************************"
  );
  console.log("get Title : " + (await page.title()));
  console.log(
    "************************************************************************************************"
  );
  console.log("get URL : " + (await page.url()));

  console.log(
    "************************************************************************************************"
  );
  await page.locator("xpath=//a[contains(text(),'CRM/SFA')]").click();
  await page.waitForLoadState("load");
  console.log(
    "************************************************************************************************"
  );
  console.log("After click  CRMSFA Link - get Title : " + (await page.title()));
  console.log(
    "************************************************************************************************"
  );
  console.log("After click  CRMSFA Link - get URL : " + (await page.url()));

  console.log(
    "************************************************************************************************"
  );

  await page.locator("//a[text()='Leads']").click();
  await page.waitForLoadState("load");
  console.log(
    "************************************************************************************************"
  );
  console.log("After click  Leads Link - get Title : " + (await page.title()));
  console.log(
    "************************************************************************************************"
  );
  console.log("After click  Leads Link - get URL : " + (await page.url()));

  console.log(
    "************************************************************************************************"
  );
  await page.locator("//a[text()='Create Lead']").click();
  await page.waitForLoadState("load");
  console.log(
    "************************************************************************************************"
  );
  console.log(
    "After click  Create Leads Link - get Title : " + (await page.title())
  );
  console.log(
    "************************************************************************************************"
  );
  console.log(
    "After click  Create Leads Link - get URL : " + (await page.url())
  );

  console.log(
    "************************************************************************************************"
  );
  await page
    .locator("//input[@id='createLeadForm_companyName']")
    .fill("ATENA HEALTH");
  await page
    .locator("//input[@id='createLeadForm_firstName']")
    .fill("ATENA FIRSTNAME");
  await page
    .locator("//input[@id='createLeadForm_lastName']")
    .fill("ATENA LASTNAME");
  await page.locator("//input[@name='submitButton']").click();
  await page.waitForLoadState("load");
  console.log(
    "************************************************************************************************"
  );
  console.log(
    "After click  Submit Leads - get Title : " + (await page.title())
  );
  console.log(
    "************************************************************************************************"
  );
  console.log("After click  Submit Leads - get URL : " + (await page.url()));
  await browser.close();
});
