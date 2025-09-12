describe('Challenging DOM', () => {
	beforeEach(() => {
		cy.visit('/challenging_dom');
	});

	it('should have random ids for buttons', { retries: 2 }, () => {
		cy.get('.button')
			.then(($buttons) => Cypress._.map($buttons, (btn) => btn.id))
			.then((buttonIds) => {
				cy.log('Button IDs:', buttonIds.join(', '));
				cy.reload();
				cy.get('.button')
					.then(($buttons) =>
						Cypress._.map($buttons, (btn) => btn.id),
					)
					.then((buttonIds2) => {
						cy.log(
							'Button IDs after reload:',
							buttonIds2.join(', '),
						);
						expect(buttonIds).not.to.deep.equal(buttonIds2);
					});
			});
	});

	it('should have table with correct data', () => {
		const testFilePath: string = `${Cypress.env('testFilesDir')}/test_5.csv`;
		cy.task('readCSV', testFilePath).then((expectedResult) => {
			cy.get('table tr').then(($rows) => {
				const actualData = Array.from($rows).map((row) =>
					Array.from(row.querySelectorAll('td,th')).map((cell) =>
						(cell.textContent || '').replace(/\s+/g, '').trim(),
					),
				);
				expect(actualData).to.deep.equal(expectedResult);
			});
		});
	});

	it('should display image with the correct number', () => {
		cy.get('#canvas').then(($canvas) => {
			const canvas = $canvas[0] as HTMLCanvasElement;
			const dataUrl = canvas.toDataURL('image/png');
			cy.task('recognizeNumber', dataUrl, { log: false }).then(
				(ocrNumber) => {
					cy.get('script').then(($scripts) => {
						const answer = Array.from($scripts)
							.map((script) => script.innerHTML)
							.find((content) => content.includes('Answer: '));
						if (!answer)
							throw new Error('Number not found in scripts');
						const numberFromScript = answer
							.split('Answer: ')[1]
							.split("'")[0]
							.replace(',', '');
						cy.log(`Solution from DOM: ${numberFromScript}`);
						cy.log(`OCR number:, ${ocrNumber}`);
						expect(ocrNumber).to.equal(numberFromScript);
					});
				},
			);
		});
	});
});
