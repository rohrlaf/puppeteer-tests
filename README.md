# puppeteer-tests

Testing puppeteer for different scenarios

## Getting started

**Install** Puppeteer:

```sh
yarn add -E puppeteer@latest
```

### Trobleshooting

For more info, read the [Puppeteer troubleshootings docs](https://github.com/GoogleChrome/puppeteer/blob/master/docs/troubleshooting.md).

#### WSL causes errors with the Puppeteer sandbox.

> (node:13556) UnhandledPromiseRejectionWarning: Error: Failed to launch chrome!
>
> [...] No usable sandbox! [...]
> If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.

**Setup** [setuid sandbox](https://github.com/GoogleChrome/puppeteer/blob/master/docs/troubleshooting.md#alternative-setup-setuid-sandbox):

```sh
# cd to the downloaded instance
cd <project-dir-path>/node_modules/puppeteer/.local-chromium/linux-<revision>/chrome-linux/
sudo chown root:root chrome_sandbox
sudo chmod 4755 chrome_sandbox
# copy sandbox executable to a shared location
sudo cp -p chrome_sandbox /usr/local/sbin/chrome-devel-sandbox
# export CHROME_DEVEL_SANDBOX env variable
export CHROME_DEVEL_SANDBOX=/usr/local/sbin/chrome-devel-sandbox
```

If not successful, see [Puppeteer#1837](https://github.com/GoogleChrome/puppeteer/issues/1837#issuecomment-405047723) for other options.

**Install** Chromium for WSL:

```sh
sudo apt-get install chromium-browser
```

**Set** the correct executable path:

```js
const browser = await puppeteer.launch({
  executablePath: '/usr/bin/chromium-browser',
});
```
