const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({
    ignoreDefaultArgs: ['--disable-extensions'],
    executablePath: 'chrome.exe',
    // args: ['--no-sandbox', '--disable-setuid-sandbox'], // DO NOT USE!
  });
  const page = await browser.newPage();
  await page.goto('https://www.xxxlutz.se/');
  await page.screenshot({ path: 'example.png' });

  await browser.close();
})();
