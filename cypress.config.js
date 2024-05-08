const { defineConfig } = require("cypress");

module.exports = defineConfig({
  viewportWidth: 1366,
  viewportHeight: 768,

  e2e: {
    setupNodeEvents(on, config) {
      modifyObstructiveCode: false;
      // implement node event listeners here
    },
    chromeWebSecurity: false,
    //modifyObstructiveCode: true,
    includeShadowDom: false,
    //experimentalRunAllSpecs: false,
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
