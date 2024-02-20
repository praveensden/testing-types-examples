const puppeteer = require("puppeteer");

(async () => {
  const browser = await puppeteer.launch({
    headless: false,
    slowMo: 100,
    args: ["--window-size=1920,1080"],
  });
  const page = await browser.newPage();

  await page.goto("https://namastedev.com/");

  page.setViewport({
    width: 1920,
    height: 1080,
  });
  const coursesButtonLink = ".menu > li:nth-child(2) > a";
  await page.waitForSelector(coursesButtonLink);
  await page.click(coursesButtonLink);
  const enrollButton = ".card-actions";
  await page.waitForSelector(enrollButton);
  page.click(enrollButton);
  console.log("Webpage Loaded");
  await browser.close();
})();
