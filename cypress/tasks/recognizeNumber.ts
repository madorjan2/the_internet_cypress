import Tesseract from 'tesseract.js';

export const recognizeNumber = async (image: string): Promise<string> => {
	const result = await Tesseract.recognize(image, 'eng');
	return result.data.text.split(': ')[1].trim();
};
