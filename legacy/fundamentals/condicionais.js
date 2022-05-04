const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
);

console.log("Destinos possíveis:\n");
console.log(listaDeDestinos);

const buyerAge = 23;
const isAccompanied = false;
const hasTicket = false;

if(buyerAge >= 18 || isAccompanied){
    console.log('Venda liberada!');
    listaDeDestinos.splice(2,1);
}else{
    console.log("Não é maior de idade, não é possível liberar a venda!")
}

console.log('Embarque: \n\n');

if(isAccompanied || buyerAge >=18 && hasTicket){
    console.log('Embarque liberado... - Boa viagem!');
}else {
    console.log("Embarque bloqueado!");
}
console.log(`\n> `+listaDeDestinos);