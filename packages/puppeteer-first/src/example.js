const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({
    // ignoreDefaultArgs: ['--disable-extensions'], // extensions can cause problems on Windows
    // executablePath: 'chrome.exe', // set external executable outside of puppeteer
    // args: ['--no-sandbox', '--disable-setuid-sandbox'], // DO NOT USE! diables security sandbox
  });
  console.log(await browser.version());
  const page = await browser.newPage();
  await page.goto('https://www.xxxlutz.se/');
  await page.screenshot({ path: 'screenshots/example.png' });

  await browser.close();
})();
