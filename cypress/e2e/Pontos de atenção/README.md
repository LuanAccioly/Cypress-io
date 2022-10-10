- [Pontos de Atenção](#pontos-de-atenção)
  - [iFrame](#iframe)
  - [Limitações](#limitações)
  - [Possíveis soluções](#possíveis-soluções)
    - [Executar um teste dedicado para o iFrame na sua página original](#executar-um-teste-dedicado-para-o-iframe-na-sua-página-original)
    - [Plugin iFrame](#plugin-iframe)
      - [Instalando](#instalando)
      - [Utilizando as três variações do plugin](#utilizando-as-três-variações-do-plugin)
    - [Assuntos relacionados](#assuntos-relacionados)


# Pontos de Atenção

## iFrame

> É uma tag ou etiqueta em um documento HTML que viabiliza a inclusão de outro documento HTML dentro do primeiro. Em outras palavras, ele permite que, a partir de uma página inicial, seja possível abrir uma seção de outra página qualquer

Devido os elementos dentro do iFrame não estarem "dentro" da página que estamos navegando, a maneira que devemos tratá-lo no Cypress é diferente

Podemos exemplificar utilizando o playground [wcaquino](https://wcaquino.me/cypress/componentes.html):

- Localizamos o iFrame na página que contém um textArea
- Reunimos em uma variável todo o conteúdo dentro da tag `body` do iFrame
- Invés de `cy.get()` utilizamos `cy.wrap()` passando como parâmetro a váriavel criada anteriormente
  - Localizamos o elemento que desejamos (neste caso, a textArea)
  - Podemos utilizar a função `type()` como faríamos normalmente

```javascript
        cy.visit('https://wcaquino.me/cypress/componentes.html')
        cy.get('#frame1').then(iframe => {
            const body = iframe.contents().find('body')
            cy.wrap(body).find('#tfield').type('digitando em um iframe')
        })
```



## Limitações

- Cypress não consegue lidar com Alerts vindos de dentro de um iFrame.

Exemplo:

- O playground [wcaquino](https://wcaquino.me/cypress/componentes.html) contém um iFrame que consiste em um textArea e um botão que gera um Alert simples.
- Então localizamos o botão e clicamos:
  - `cy.wrap(body).find('#otherButton').click()`
  - O Cypress fica esperando que o Alert seja fechado por alguém e não conclui o teste se o ALert não for encerrado manualmente
  - ![iframe](/imgs/botaoiFrame.png)

## Possíveis soluções

### Executar um teste dedicado para o iFrame na sua página original

- Ao inspecionar um iFrame, podemos ver o link que nos leva diretamente para seu conteúdo.
- A partir disso, podemos iniciar um novo teste direcionado ao iFrame.
  - Visitamos o link do iFrame
  - Clicamos no mesmo botão que gera o Alert

```Javascript
it('Teste diretamente do iFrame', () => {
        cy.visit('https://wcaquino.me/cypress/frame.html')
        cy.get('#otherButton').click();
        
    })
```

---

### Plugin iFrame

> Criado por um usuário do Cypress. Consiste em comandos personalizados, simplificando o trabalho com elementos dentro de um iFrame.

#### Instalando

```
npm install -D cypress-iframe
```

#### Utilizando as três variações do plugin

```frameLoaded()``` Verifica se um iFrame foi carregado na página

Exemplo:

```Javascript
// Verificará se o iframe é carregado em qualquer página que não seja 'about:blank'
cy.frameLoaded()

// Verificará se o iframe é carregado em qualquer URL que contenha a parte do caminho fornecido
cy.frameLoaded({ url: 'https://google.com' })
cy.frameLoaded({ url: '/join' })
cy.frameLoaded({ url: '?some=query' })
cy.frameLoaded({ url: '#/hash/path' })

// Também podemos utilizar um seletor para verificar se um iFrame específico foi carregado
cy.frameLoaded('#my-frame')
cy.frameLoaded('#my-frame', { url: '/join' })

```

Refazendo o teste "Digitando em um iFrame" utilizando o plugin

```Javascript
    it('Digitando no iFrame', () => {
        cy.visit('https://wcaquino.me/cypress/componentes.html')
        cy.frameLoaded('#frame1')
        cy.iframe().find('#tfield').type('digitando em um iframe')
        cy.iframe().find('#tfield').should('have.value','digitando em um iframe')
    })
```

> Utilizando o plugin, não foi possível contornar o problema da espera infinita pelo Alert

> Cypress não tira snapshots dentro de iframes. Por isso, mesmo que estejamos usando essa lib, em nossos testes, ao passar o mouse sobre os comandos executados em um iframe, um espaço reservado será exibido em vez do conteúdo real do iframe quando o comando foi executado.

---

### Assuntos relacionados

- [ ] Jquery
- [ ] Assincronismo
