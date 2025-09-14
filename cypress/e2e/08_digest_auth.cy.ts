describe('Basic Auth', () => {
	beforeEach(() => {});

	it('should log in via basic auth using Cypress visit argument', () => {
		cy.visit('/basic_auth/', {
			auth: {
				username: 'admin',
				password: 'admin',
			},
		});
		cy.get('.example p').should(
			'contain.text',
			'Congratulations! You must have the proper credentials.',
		);
	});

	it('should login in via basic auth', () => {
		cy.intercept('GET', '/basic_auth/', (req) => {
			const credentials: string = btoa('admin:admin');
			req.headers['Authorization'] = `Basic ${credentials}`;
		}).as('authRequest');
		cy.visit('/basic_auth/');
		cy.wait('@authRequest');
		cy.get('.example p').should(
			'contain.text',
			'Congratulations! You must have the proper credentials.',
		);
	});
});
