describe('entendendo a espera de cypress', () => {
    before(() => {
        cy.visit('https://wcaquino.me/cypress/componentes.html')
    })
    it('espera lenta', () => {
        cy.get('#buttonDelay').click()
        cy.get('#novoCampo').should('not.exist')
        cy.get('#novoCampo').type('testando')
    })
})