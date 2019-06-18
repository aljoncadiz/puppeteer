const puppeteer = require('puppeteer');
const request = require('request-promise-native');
const poll = require('promise-poller').default;

//const getUsername = require('./get-username');
//const getPassword = require('./get-password');
//const apiKey = require('./api-key');

const siteDetails = {
    pageurl: 'https://cp.rfolympic.com'
};

const chromeOptions = {
    headless: false
};

(async () => {
    const browser = await puppeteer.launch(chromeOptions);
    const page = await browser.newPage();
    
    await page.setViewport({ width: 1280, height: 800 }) //{waitUntil: 'networkIdle2'} -- lets you wait until there's no pending network requests on the background (500ms)
    await page.goto(siteDetails.pageurl);
    await page.waitForSelector('div.rc-anchor-light.rc-anchor-normal');
    await page.screenshot({path: 'image.png', fullpage: true});
    await browser.close();
})();
