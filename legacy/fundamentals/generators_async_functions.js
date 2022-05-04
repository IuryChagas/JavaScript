// Generators

// Generators funcionam semelhantes as promises;
// Onde ações podem ser pausadas e continuadas depois;
// Caracterizados pelo function* e yield, veja:

// O yield pode salvar o estado da variável;

function* genNewId(){
    let id = 0;
    while(true){
        yield id++;
    }
}

let createId = genNewId();

console.log(createId.next().value)
console.log(createId.next().value)
console.log(createId.next().value)
console.log(createId.next().value)