import { defineConfig } from 'cypress';
import { readCSV } from './cypress/tasks/fileTasks';
import { recognizeNumber } from './cypress/tasks/recognizeNumber';

export default defineConfig({
	e2e: {
		experimentalWebKitSupport: false,
		setupNodeEvents(on, config) {
			on('task', {
				readCSV,
				recognizeNumber,
			});
		},
		env: {
			testFilesDir: 'cypress/e2e/test_data',
		},
		baseUrl: 'http://localhost:7080/',
		viewportWidth: 1280,
		viewportHeight: 720,
		video: false,
		screenshotOnRunFailure: false,
	},
});
