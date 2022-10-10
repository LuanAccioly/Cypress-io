/// <reference types="cypress" />

before(() => {
    cy.visit('https://wcaquino.me/cypress/componentes.html')
})

describe("trabalhando com elementos básicos", () => {
    it.skip("textos", () => {
        cy.visit('https://sigs.ufrpe.br/sigaa/verTelaLogin.do')
        cy.get('body').should('contain', 'sistema')
        cy.get('[style="margin: 0 auto; width: 645px; "] > div > center').should('contain', 'Perdeu')      
    })

    it('links', () => {
        cy.get('[href="#"]').click()
        cy.get('#resultado').should('have.text', 'Voltou!')
        cy.reload()
        cy.get('#resultado').should('have.not.text', 'Voltou!')
        
    })
}) 