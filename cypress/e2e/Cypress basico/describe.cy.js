// Ajuda o VSCode e ao intellisense a entender que estamos escrevendo script em Cypress
/// <reference types="cypress" />

/*
A função .skip() faz o teste ser 'ignorado'. Tamém é aplicado a grupos
A função .only() faz com que apenas aquele teste/grupo seja executado
*/

it("Teste externo", () => { 
  //Corpo do teste
});

// Criando grupo de testes
describe("Grupo de testes", () => {
  //Grupo dentro de um grupo
    describe("Grupo de testes mais específicos", () => {
        it("Esse teste é mais específico", () => {});  
    });

    it("Teste interno", () => {});
});
