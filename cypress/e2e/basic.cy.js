/// <reference types="cypress" />


describe('Cypress basic', () => {
    it.skip('Deve visitar uma página e fazer uma assertiva no título', () => {
        cy.visit('http://wcaquino.me/cypress/componentes.html')
        /* const title = cy.title();
        console.log(title) */

        //Verificando o título da página 
        cy.title().should('be.equal', 'Campo de Treinamento')
        cy.title().should('contain', 'Campo')

        //Reescrevendo a função acima
        cy.title()
            .should('be.equal', 'Campo de Treinamento')
            .and('contain', 'Campo')

        console.log(cy.title())
    })

    it('Localizando e interagindo com elementos', () => {
        cy.visit('http://wcaquino.me/cypress/componentes.html')

        //Localizando e clicando no botão
        cy.get('#buttonSimple').click()

        //Verificando valor do botão
        cy.get('#buttonSimple').should('have.value', 'Obrigado!')

        //Reescrevendo a função acima
        cy.get('#buttonSimple').should('have.value', 'Obrigado!')

    })
})
