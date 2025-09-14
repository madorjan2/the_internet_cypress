describe('Checkboxes', () => {
	beforeEach((): void => {
		cy.visit('/checkboxes');
	});

	const firstCheckbox = () => cy.get('input[type="checkbox"]').first();
	const lastCheckbox = () => cy.get('input[type="checkbox"]').last();

	it('should have the first checkbox unchecked', () => {
		firstCheckbox().should('not.be.checked');
	});

	it('should have the second checkbox checked', () => {
		lastCheckbox().should('be.checked');
	});

	it('should toggle states when switched', () => {
		firstCheckbox().click();
		lastCheckbox().click();
		firstCheckbox().should('be.checked');
		lastCheckbox().should('not.be.checked');
	});
});
