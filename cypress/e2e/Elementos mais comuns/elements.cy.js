/// <reference types="cypress" />

describe("trabalhando com elementos básicos", () => {
    it("textos", () => {
        cy.visit('https://sigs.ufrpe.br/sigaa/verTelaLogin.do')
        cy.get('body').should('contain', 'sistema')
        cy.get('[style="margin: 0 auto; width: 645px; "] > div > center').should('contain', 'Perdeu')      
    })
}) 