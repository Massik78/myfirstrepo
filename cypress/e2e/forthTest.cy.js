describe('Test sute', function()  {
    xit('Run web site', () => {
        cy.visit('https://example.cypress.io/')
        cy.get('.dropdown-toggle').click()
        cy.get('.dropdown-menu a[href="/commands/location"]').click()
        cy.url().should('include','/commands/location')
    });

    it('Run web site', () => {
        cy.visit('https://example.cypress.io/')
        cy.get('.dropdown-toggle').click()
        cy.get('.dropdown-menu a[href="/commands/location"]').click()
        cy.url().should('include','/commands/location')
    });
    
});


