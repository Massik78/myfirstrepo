describe('My first test', () => {
    it ('test case1', () => {
        cy.visit('https://example.cypress.io')
        cy.contains('type').click()
        cy.url().should('include','/commands/actions')
    })
})

