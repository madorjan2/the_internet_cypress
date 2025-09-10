describe('Add or Remove Elements', () => {
	beforeEach(() => {
		cy.visit('/add_remove_elements/');
	});

	const addElement = (): void => {
		cy.contains('button', 'Add Element').click();
	};

	const deleteFirstElement = (): void => {
		cy.contains('button', 'Delete').first().click();
	};

	it('should add one element per click', () => {
		addElement();
		cy.get('button').filter(':contains("Delete")').should('have.length', 1);
		addElement();
		addElement();
		cy.get('button').filter(':contains("Delete")').should('have.length', 3);
	});

	it('should delete element on click', () => {
		addElement();
		addElement();
		cy.get('button').filter(':contains("Delete")').should('have.length', 2);
		deleteFirstElement();
		cy.get('button').filter(':contains("Delete")').should('have.length', 1);
		deleteFirstElement();
		cy.get('button').filter(':contains("Delete")').should('have.length', 0);
	});
});
