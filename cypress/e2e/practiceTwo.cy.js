describe('LogIn', () => {
    it('LogIntClik', () => {
        
    cy.visit('https://qatest.site/')
    cy.get('.login').click()
    });
    it('EmailPass', () => {
    cy.get('input[placeholder="Email"]').eq(1).type('test@dfd.com',{ force: true })
    cy.get('input[placeholder="Password"]').type('password',{ force: true })
    cy.get('[value="SIGN IN"]').eq(0).click(); 
    });
});