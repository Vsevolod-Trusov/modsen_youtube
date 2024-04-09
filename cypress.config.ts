import { defineConfig } from 'cypress'

export default defineConfig({
  fixturesFolder: 'src/cypress/fixtures',
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      return require('./src/cypress/plugins/index.js')(on, config)
    },
    baseUrl: 'http://localhost:3000',
    specPattern: 'src/cypress/integration/**/*.cy.{js,jsx,ts,tsx}',
    supportFile: 'src/cypress/support/index.js',
  },
})
