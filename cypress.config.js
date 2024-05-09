const { defineConfig } = require("cypress");

module.exports = defineConfig({
  viewportWidth: 1366,
  viewportHeight: 768,

  e2e: {
    setupNodeEvents(on, config) {
      return {
        modifyObstructiveCode: false,
      };
    },
    chromeWebSecurity: false,
    includeShadowDom: false,
    watchForFileChanges: false,
    waitForAnimations: true,
  },

  component: {
    devServer: {
      framework: "angular",
      bundler: "webpack",
    },
    specPattern: "**/*.cy.ts",
  },
});
