/// <reference types="cypress" />

it.skip('Quality', () => {
    const a = 1;

    expect(a).equal(1);
    expect(a, 'Deveria ser 1').equal(2);
    expect(a).to.be.equal(1); //Melhorando a leitura da função

})

it('Veracidade', () => {
    const a = true;
    const b = null;
    let c;

    expect(a).to.be.true;
    expect(true).to.be.true
    expect(b).to.be.null
    expect(c).to.be.undefined
})

it('Igualdade de Objeto', () => {
    const obj = {
        a:1,
        b:2
    }

    // A função deep é necessária pra comparar elementos de um objeto
    expect(obj).to.be.deep.equal({a: 1, b:2})

    //.eqls() faz a mesma coisa que .to.be.deep.equal() 
    expect(obj).eqls({a: 1, b:2})

    // .include verifica se tem algum valor específico dentro do objeto
    expect(obj).include({ a: 1 })

    // Verificando se há uma determinada propriedade no objeto
    expect(obj).to.have.property('b')
    expect(obj).to.have.property('b', 2)

    // Verificando se o objeto não está vazio
    expect(obj).to.not.be.empty
})

it('Arrays', () => {
    const arr = [1,2,3]
    expect(arr).to.have.members([1, 2, 3])
    expect(arr).to.include.members([1, 3])
    expect(arr).to.not.be.empty
})

it('Tipos', () => {
    const num = 1
    const str = "String" 

    expect(num).to.be.a('number')
    expect(str).to.be.a('string')
    expect({}).to.be.an('object')

})

it('Strings', () => {
    const frase = "Isso é uma string"

    expect(frase).to.be.equal("Isso é uma string")
    expect(frase).to.have.length(17)
    expect(frase).to.contains("é")
    expect(frase).to.match(/uma/)
    // O ^ no início do valor verifica se a string inicia com aquele valor
    expect(frase).to.match(/^Isso/)
    // O $ no final do valor verifica se a string termina com aquele valor
    expect(frase).to.match(/string$/)
})