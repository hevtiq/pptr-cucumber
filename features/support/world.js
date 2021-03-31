// bring cucumber setWorldConstructor module as middleware
const { setWorldConstructor } = require('@cucumber/cucumber');

// bring chai expect module as middleware
const { expect } = require('chai');

// bring puppeteer as middleware
const puppeteer = require('puppeteer');

// declare scripts for test steps
class CustomWorld {
    /**
     * launchBrowser() method to launch browser with a new browser and a new page instance
     */
    async launchBrowser() {
        // create a new browser instance
        this.browser = await puppeteer.launch({
            headless: false,
            ignoreHTTPSErrors: true,
        });

        // create a new page instance
        this.page = await this.browser.newPage();
    };

    /**
     * closeBrowser() method to close browser after scripts run completed
     */
    async closeBrowser() {
        await this.browser.close();
    };

    /**
     * visit() method to visit to zero bank page
     */
    async visit() {
        await this.page.goto('http://zero.webappsecurity.com/login.html');
    };

    /**
     * fillLoginForm() method to fill login form
     */
    async fillLoginForm() {
        // wait for DOM displayed / rendered
        await this.page.waitForSelector('#login_form');

        // input username
        await this.page.type('#user_login', 'username');

        // input password
        await this.page.type('#user_password', 'password');
    };

    /**
     * submitLogin() method to click submit button
     */
    async submitLogin() {
        // click on button submit to grant auth
        await this.page.click('.btn-primary');
    };

    // verify login status after submit
    async verifySuccessfulLogin() {
        // verify success if DOM displayed
        await this.page.waitForSelector('#account_summary_tab');
    };
};

// export module as middleware (export declare cost setWorldConstructor)
setWorldConstructor(CustomWorld);