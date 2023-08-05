const report = require("multiple-cucumber-html-reporter");
report.generate({
  jsonDir: "jsonlogs", // ** Path of .json file **//
  reportPath: "./reports/cucumber-report.html",
  metadata: {
    browser: {
      name: "chrome",
      version: "115.0.5790.110",
    },
    device: "local machine",
    platform: {
      name: "Ubuntu",
      version: "22.04",
    },
  },
});
