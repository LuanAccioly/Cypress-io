

describe.skip('iFrames', () => {
    it('Digitando no iFrame', () => {
        cy.visit('https://wcaquino.me/cypress/componentes.html')
        cy.get('#frame1').then(iframe => {
            const body = iframe.contents().find('body')
            cy.wrap(body).find('#tfield').type('digitando em um iframe')
        })
    })
    
    it('Teste diretamente do iFrame', () => {
        cy.visit('https://wcaquino.me/cypress/frame.html')
        cy.get('#otherButton').click();
        
    })
})

describe('Plugin iFrame', () => {

    it('Digitando no iFrame', () => {
        cy.visit('https://wcaquino.me/cypress/componentes.html')
        cy.frameLoaded('#frame1')
        /* cy.iframe().find('#otherButton').click(); */
        cy.iframe().find('#tfield').type('digitando em um iframe')
        cy.iframe().find('#tfield').should('have.value','digitando em um iframe')
    })

    it('Alert', () => {
        cy.visit('https://wcaquino.me/cypress/componentes.html')
        cy.frameLoaded('#frame1')
        cy.iframe().find('#otherButton').click();
    })
})