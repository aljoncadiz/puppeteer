const puppeteer = require('puppeteer');
const request = require('request-promise-native');
const poll = require('promise-poller').default;

const accountInfo = require('./accountInfo');
const pageInfo = require('./pageInfo');
const options = require('./chromeOptions');

(async () => {
    const browser = await puppeteer.launch(options);
    const page = await browser.newPage();
    
    await page.setViewport({ width: 1280, height: 800 }) //{waitUntil: 'networkIdle2'} -- lets you wait until there's no pending network requests on the background (500ms)
    await page.goto(pageInfo.url);
    // await page.waitForSelector('div.rc-anchor-light.rc-anchor-normal');
    // await page.screenshot({path: 'image.png', fullpage: true});
    await page.type(accountInfo.usernameSelector, accountInfo.username);
    await page.type(accountInfo.passwordSelector, accountInfo.password);
    
})();
