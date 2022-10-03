# Pontos de Atenção
## iFrame
> É uma tag ou etiqueta em um documento HTML que viabiliza a inclusão de outro documento HTML dentro do primeiro. Em outras palavras, ele permite que, a partir de uma página inicial, seja possível abrir uma seção de outra página qualquer

Devido os elementos dentro do iFrame não estarem "dentro" da página que estamos navegando, a maneira que devemos tratá-lo no Cypress é diferente

**Limitações:**
- Cypress não consegue lidar com Alerts vindos de dentro de um iFrame. 

Exemplo:
- O playground [wcaquino](wcaquino.me/cypress/componentes.html) contém um iFrame que consiste em um textArea e um botão que gera um Alert simples.
- Então localizamos o botão e clicamos:
    - `cy.wrap(body).find('#otherButton').click()`
    - O Cypress fica esperando que o Alert seja fechado por alguém e não conclui o teste se o ALert não for encerrado manualmente
    - ![iframe](/imgs/botaoiFrame.png)