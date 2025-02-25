const { chromium } = require("playwright");
const fs = require("fs");

const username = "";
const password = "#";
(async () => {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();
  await page.goto("https://www.instagram.com/accounts/login/");

  await page.focus('input[name="username"]');
  await page.fill('input[name="username"]', username);

  await page.focus('input[name="password"]');
  await page.fill('input[name="password"]', password);

  await page.click('button[type="submit"]');

  await page.waitForSelector('svg[aria-hidden="true"][viewBox="0 0 24 24"]');
  await page.click('svg[aria-hidden="true"][viewBox="0 0 24 24"]');

  await page.waitForSelector('svg[aria-label="Search"]');
  await page.click('svg[aria-label="Search"]');

  await page.waitForSelector('input[placeholder="Search"]');
  await page.fill('input[placeholder="Search"]', "ayesha");

  await page.keyboard.press("Enter");

  page.on("response", async (response) => {
    const url = response.url();

    console.log(url);
  });
})();
