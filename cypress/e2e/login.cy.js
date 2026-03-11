describe('SauceDemo Login Suite', () => {
    it('Should login and see the inventory page', () => {
        cy.visit('https://www.saucedemo.com/')
        cy.get('[data-test="username"]').type('standard_user')
        cy.get('[data-test="password"]').type('secret_sauce')
        cy.get('[data-test="login-button"]').click()

        // التأكد إننا دخلنا صح
        cy.url().should('include', '/inventory.html')
        cy.get('.title').should('have.text', 'Items')
    })
})
