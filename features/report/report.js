// bring cucumber-html-report module as middleware
const reporter = require('cucumber-html-reporter');

// object options
const options = {
    // themes
    // 1) bootstrap
    // 2) hierarchy
    // 3) foundation
    // 4) simple
    theme: 'bootstrap',
    jsonFile: 'features/report/cucumber_report.json',
    reportSuiteAsScenarios: true,
    scenarioTimestamp: true,
    launchReport: false,
    output: 'features/report/cucumber_report.html',
    screenshotsDirectory: 'screenshots/',
    storeScreenshots: true,
};

reporter.generate(options);