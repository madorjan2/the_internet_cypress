describe('Smoke test', () => {
	beforeEach(() => {
		cy.visit('/');
	});

	it('should display correct title', () => {
		cy.get('h1.heading').should('have.text', 'Welcome to the-internet');
	});

	it('should display list with 44 elements', () => {
		cy.get('li a').should('have.length', 44);
	});
});
