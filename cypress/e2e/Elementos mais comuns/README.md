- [Elementos mais comuns](#elementos-mais-comuns)
  - [Links](#links)
  - [Hooks](#hooks)
    - [Ordem de execução de cada Hook](#ordem-de-execução-de-cada-hook)
    - [Exemplos de uso](#exemplos-de-uso)

# Elementos mais comuns

## Links



## Hooks

Cypress também fornece hooks (emprestados do Mocha).

Eles são úteis para definir as condições que você deseja executar antes de um conjunto de testes ou antes de cada teste. Eles também são úteis para limpar as condições após um conjunto de testes ou após cada teste.

```javascript
before(() => {
  // root-level hook
  // é executado uma vez antes de todos os testes
})

beforeEach(() => {
  // root-level hook
  // é executado antes de cada bloco de teste
})

afterEach(() => {
  // executado depois de cada bloco de teste
})

after(() => {
  // é executado assim que todos os testes são feitos
})

describe('Hooks', () => {
  before(() => {
    // é executado uma vez antes de todos os testes no bloco
  })

  beforeEach(() => {
    // é executado antes de cada teste no bloco
  })

  afterEach(() => {
    // é executado após cada teste no bloco
  })

  after(() => {
    // é executado uma vez após todos os testes no bloco
  })
})
```

### Ordem de execução de cada Hook

1. `before()`
2. `beforeEach()`
3. `describe()/it()`
4. `afterEach()`
5. `after()`

> O recomendado para limpar estados é utilizar o `before()`. Mais detalhes em [docs.cypress](https://docs.cypress.io/guides/references/best-practices#Using-after-or-afterEach-hooks)

### Exemplos de uso

- Carregar uma página antes de um grupo de testes sem precisar ficar repetindo o comando `cy.visit()`

