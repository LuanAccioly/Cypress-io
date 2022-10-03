//Estudando promisses

it("sem testes  ainda", () => {});

//Recebe uma função callback que será executada após um determinado tempo
const getSomething = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(12);
        }, 1000);
    });
};

const system = () => {
    console.log("init");
        getSomething().then((some) => {
            console.log(`Something is ${some}`);
    });
};

system();
