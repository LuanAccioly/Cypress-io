# Pontos de Atenção

## iFrame

> É uma tag ou etiqueta em um documento HTML que viabiliza a inclusão de outro documento HTML dentro do primeiro. Em outras palavras, ele permite que, a partir de uma página inicial, seja possível abrir uma seção de outra página qualquer

Devido os elementos dentro do iFrame não estarem "dentro" da página que estamos navegando, a maneira que devemos tratá-lo no Cypress é diferente

Podemos exemplificar utilizando o playground [wcaquino](https://wcaquino.me/cypress/componentes.html):
![wcaquino](/imgs/wcaquino.png)
- Localizamos o iFrame na página que contém um textArea
- Reunimos em uma variável todo o conteúdo dentro da tag `body` do iFrame
- Invés de `cy.get()` utilizamos `cy.wrap()` passando como parâmetro a váriavel criada anteriormente 
    - Localizamos o elemento que desejamos (neste caso, a textArea) 
    - Podemos utilizar a função `type()` como faríamos normalmente

`
cy.visit('https://wcaquino.me/cypress/componentes.html')
        cy.get('#frame1').then(iframe => {
            const body = iframe.contents().find('body')
            cy.wrap(body).find('#tfield').type('digitando em um iframe')
        })
`

### Limitações

- Cypress não consegue lidar com Alerts vindos de dentro de um iFrame. 

Exemplo:

- O playground [wcaquino](https://wcaquino.me/cypress/componentes.html) contém um iFrame que consiste em um textArea e um botão que gera um Alert simples.
- Então localizamos o botão e clicamos:
  - `cy.wrap(body).find('#otherButton').click()`
  - O Cypress fica esperando que o Alert seja fechado por alguém e não conclui o teste se o ALert não for encerrado manualmente
  - ![iframe](/imgs/botaoiFrame.png)

## Possíveis soluções

### Rodar o teste na página original do iFrame


### Plugin iFrame

---

### Assuntos relacionados

- [ ] Jquery 
- [ ] Assincronismo