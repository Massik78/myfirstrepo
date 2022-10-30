describe('Test sute', function()  {
    it('Run web site', () => {
        cy.visit('https://example.cypress.io/')
        cy.get('a[href="/commands/querying"]').contains('get').click()
             
    });
});
