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
  await page.waitForTimeout(8000);
  await page.click("text=CRM/SFA");
  await page.waitForLoadState("load");
  await page.click("text=Leads");
  await page.waitForLoadState("load");
  await page.click("text=Create Lead");
  await page.waitForLoadState("load");
  await page.fill("input[id='createLeadForm_companyName']", "ATENA HEALTH");
  await page.fill("input[id='createLeadForm_firstName']", "ATENA FIRSTNAME");
  await page.fill("input[id='createLeadForm_lastName']", "ATENA LASTNAME");
  await page.click("input[name='submitButton']");
  await page.waitForTimeout(8000);
  await page.waitForLoadState("load");
  await page.click("text=Edit");
  await page.waitForLoadState("load");
  await page.selectOption("select[id='updateLeadForm_industryEnumId']", {
    value: "IND_SOFTWARE",
  });
  await page.selectOption("select[id='updateLeadForm_ownershipEnumId']", {
    index: 2,
  });

  await page.selectOption("select[id='addDataSourceForm_dataSourceId']", {
    label: "Direct Mail",
  });
  await browser.close();
});
