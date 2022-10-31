describe('Test', () => {
    it('clicking', () => {
    cy.visit('https://example.cypress.io')
    //cy.contains('type').click()
    cy.get('.home-list a[href="/commands/querying"]').contains('Querying').click()
    cy.url().should('include', '/commands/querying')
    cy.go('back')
    });
});
