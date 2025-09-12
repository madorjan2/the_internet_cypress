import { readFileSync } from 'fs';

export const readCSV = (path: string): string[][] => {
	const fileContent: string = readFileSync(path, { encoding: 'utf-8' });
	return fileContent
		.replace(/\r/g, '')
		.trim()
		.split('\n')
		.map((row) => row.split(','));
};
