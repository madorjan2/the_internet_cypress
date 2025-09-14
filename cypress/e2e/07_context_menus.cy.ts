describe('Context menus', () => {
	beforeEach((): void => {
		cy.visit('/context_menu');
	});

	it('should display alert on right click', () => {
		cy.window().then((win) => {
			cy.stub(win, 'alert').as('alertStub');
		});
		cy.get('#hot-spot').rightclick();
		cy.get('@alertStub').should(
			'have.been.calledWith',
			'You selected a context menu',
		);
	});
});
