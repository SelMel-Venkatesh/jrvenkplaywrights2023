import { test, chromium } from "@playwright/test";

test("To launch a TestLeaf taps -create lead using css and playwrights selectors", async () => {
  const browser = await chromium.launch({ headless: false, channel: "chrome" });
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto("http://leaftaps.com/opentaps/control/main");
  await page.waitForLoadState("load");
  await page.getByLabel("Username").fill("Demosalesmanager");
  await page.getByLabel("Password").fill("crmsfa");
  await page.click("input.decorativeSubmit");

  await page.waitForTimeout(10000);
  console.log(
    "************************************************************************************************"
  );
  console.log("get Title : " + (await page.title()));
  console.log(
    "************************************************************************************************"
  );
  console.log("get URL : " + (await page.url()));

  await page.click("text=CRM/SFA");
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

  await page.click("text=Leads");
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

  await page.click("text=Create Lead");
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

  await page.fill("input[id='createLeadForm_companyName']", "ATENA HEALTH");
  await page.fill("input[id='createLeadForm_firstName']", "ATENA FIRSTNAME");
  await page.fill("input[id='createLeadForm_lastName']", "ATENA LASTNAME");
  await page.click("input[name='submitButton']");
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
