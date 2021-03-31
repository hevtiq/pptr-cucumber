// bring cucumber behaviors module as middleware
const { Given, When, Then, Before, After } = require("@cucumber/cucumber");

// invoke method to launch browser instance before test steps start
Before(async function() {
    return await this.launchBrowser();
});

// invoke method to close browser instance after test steps end
After(async function() {
    return await this.closeBrowser();
});

// invoke method to visit login page
Given('I open login page', async function() {
    return await this.visit();
});

// behavior: fill login form
When(/^I fill login form$/, {timeout: 2 * 5000}, async function() {
    // invoke method to fill login form
    return await this.fillLoginForm();
});

// behavior: click on submit button
When(/^I click on submit button$/, {timeout: 2 * 5000}, async function() {
    // invoke method to click submit button
    return await this.submitLogin();
});

// behavior: see content in page
Then(/^I expect to see application content$/, {timeout: 2 * 5000}, async function() {
    // invoke method to verify login success
    return await this.verifySuccessfulLogin();
});