const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: "mochawesome",
  reporterOptions: {
    reportDir: "cypress/reports",
    overwrite: false,
    html: false,
    json: true
  },
  defaultCommandTimeout: 50000,
  e2e: {
    baseUrl: 'https://jupiter.cloud.planittesting.com/',
    setupNodeEvents(on, config) {
      return config;
    },
  },
});