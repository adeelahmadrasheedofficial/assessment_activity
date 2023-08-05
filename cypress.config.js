const { defineConfig } = require("cypress");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const preprocessor = require("@badeball/cypress-cucumber-preprocessor");
const createEsbuildPlugin = require("@badeball/cypress-cucumber-preprocessor/esbuild");
const allureWriter = require("@shelex/cypress-allure-plugin/writer");

require("dotenv").config();

async function setupNodeEvents(on, config) {
	// This is required for the preprocessor to be able to generate JSON reports after each run
	await preprocessor.addCucumberPreprocessorPlugin(on, config);

	config.env = config.env || {};

	on(
		"file:preprocessor",
		createBundler({
			plugins: [createEsbuildPlugin.default(config)],
		})
	);
	allureWriter(on, config);

	// Make sure to return the config object as it might have been modified.
	return config;
}

module.exports = defineConfig({
	projectId: "fu7xa7",
	pageLoadTimeout: 90 * 1000,
	requestTimeout: 90 * 1000,
	responseTimeout: 90 * 1000,
	viewportWidth: 1366,
	viewportHeight: 768,

	e2e: {
		baseUrl: "https://automationintesting.online",
		setupNodeEvents,
		chromeWebSecurity: false,
		defaultCommandTimeout: 10 * 1000,
		specPattern: "cypress/e2e/*.feature",
		chromeWebSecurity: false,
		watchForFileChanges: false,
		env: {
			allureReuseAfterSpec: true,
		},
	},
});
