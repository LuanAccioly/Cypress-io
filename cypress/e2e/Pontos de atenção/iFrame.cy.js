/// <reference types="cypress" />

describe('iFrames', () => {
    it('Tentando digitar em um textBox dentro de um iFrame', () => {
        cy.visit('https://wcaquino.me/cypress/componentes.html')
        cy.get('#frame1').then(iframe => {
            const body = iframe.contents().find('body')
            /* cy.wrap(body).find('#tfield').type('digitando em um iframe') */
            cy.wrap(body).find('#otherButton').click();
        


        })
    })
})