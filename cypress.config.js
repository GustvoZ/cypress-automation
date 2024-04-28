const { defineConfig } = require("cypress");

module.exports = defineConfig({
  viewportWidth: 1366,
  viewportHeight: 768,

  e2e: {
    setupNodeEvents(on, config) {
      modifyObstructiveCode: true;
      // implement node event listeners here
    },
    chromeWebSecurity: false,
  },

  component: {
    devServer: {
      framework: "angular",
      bundler: "webpack",
    },
    specPattern: "**/*.cy.ts",
  },
});
