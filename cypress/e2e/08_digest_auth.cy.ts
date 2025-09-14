describe('Digest Authentication - Simplified approach', () => {
    beforeEach(() => {
        const options = {
            digestAuth: 'admin:admin',
            method: 'GET',
        };

        // Get the digest auth response before each test
        cy.task('handleDigestAuth', {
            url: 'http://localhost:7080/digest_auth',
            options
        }).then((result: any) => {
            const { res, data } = result;

            // Set up intercept with the pre-fetched response
            cy.intercept('GET', '**/digest_auth', {
                statusCode: res.statusCode,
                headers: res.headers,
                body: data
            }).as('digestAuth');
        });
    });

    it('should handle digest auth', () => {
        cy.visit('/digest_auth');
        cy.wait('@digestAuth');
        cy.get('h3').should('contain', 'Digest Auth');
        cy.get('.example p').should(
            'contain.text',
            'Congratulations! You must have the proper credentials.',
        );
    });
});