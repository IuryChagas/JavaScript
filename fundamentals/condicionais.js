const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
);

console.log("Destinos possíveis:\n");
console.log(listaDeDestinos);

const buyerAge = 16;
isAccompanied = true;

if(buyerAge >= 18){
    console.log('Comprador maior de idade');
    listaDeDestinos.splice(1,1);
}else if(isAccompanied){
    console.log('Comprador está acompanhado!');
    listaDeDestinos.splice(1,1);
}else{
    console.log("Não é maior de idade e não é possível liberar a venda!")
}

console.log(`\n> `+listaDeDestinos);
