describe('Registration', () => {
    beforeEach(() => {
        cy.visit('https://qatest.site/')
        cy.get('[href="#registerModal"]').click()
    })
    it('Register account', () => {
        let phone = `+7${Math.round(Math.random() * 1000) + 1000}`
        let email = `testGroup+${Math.round(Math.random() * 1000) + 1000}@gmail.com`
        cy.get('[name="name"]').type('TestGroup', { force: true })
        cy.get('[name="company"]').type('NataliaCompany',{ force: true })
        cy.get("input[name=email]").eq(2).type(email, {delay:200})
        cy.get('[name="phone"]').type(phone, {delay:200})
        cy.get('.center-block').last().click(); // или cy.get('.center-block').eq(1).click();
        cy.get('h5.text-center').should('have.text', 'Welcome to QA Test OP agent program') // Тем самым проверим, что зарегистрировались успешно
    });
});