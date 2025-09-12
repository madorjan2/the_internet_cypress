import { defineConfig } from 'cypress';

export default defineConfig({
	e2e: {
        experimentalWebKitSupport: false,
		setupNodeEvents(on, config) {
			// implement node event listeners here
		},
		baseUrl: 'http://localhost:7080/',
		viewportWidth: 1280,
		viewportHeight: 720,
        video: false,
        screenshotOnRunFailure: false,
	},
});
