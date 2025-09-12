describe('Broken Images', () => {
	const testCases: { index: number; expected: boolean }[] = [
		{ index: 0, expected: true },
		{ index: 1, expected: true },
		{ index: 2, expected: false },
	];

	beforeEach((): void => {
		cy.visit('/broken_images');
	});

	testCases.forEach(({ index, expected }) => {
		it(`should verify image at index ${index} is ${expected ? 'broken' : 'not broken'}`, () => {
			cy.get('.example img')
				.eq(index)
				.should('have.prop', 'naturalWidth')
				.and(expected ? 'eq' : 'be.gt', 0);
		});
	});
});
