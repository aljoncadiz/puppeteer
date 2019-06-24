const puppeteer = require('puppeteer');
const request = require('request-promise-native');
const poll = require('promise-poller').default;

const pageFolder = "facebook";
const accountInfo = require(`./${pageFolder}/accountInfo`);
const pageInfo = require(`./${pageFolder}/pageInfo`);

const options = require('./chromeOptions');

const delay = d => new Promise(r => setTimeout(r, d));

(async () => {
    const browser = await puppeteer.launch(options);
    const page = await browser.newPage();
    
    await page.setViewport({ width: 1280, height: 800 }) //{waitUntil: 'networkIdle2'} -- lets you wait until there's no pending network requests on the background (500ms)
    debugger;
    await page.goto(pageInfo.url);
    if(pageInfo.withLogin){
        await page.waitForSelector(pageInfo.usernameSelector);
        await page.waitForSelector(pageInfo.passwordSelector);
        await page.type(pageInfo.passwordSelector, accountInfo.password);
        await page.type(pageInfo.usernameSelector, accountInfo.username);
        await delay(2000)
        //page.click(pageInfo.loginSelector);
    }    
})();
