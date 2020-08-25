const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
);

console.log("Destinos possíveis:\n");
console.log(listaDeDestinos);

const buyerAge = 112;
if(buyerAge >= 18){
    console.log('Comprador maior de idade');
            // à partir da posição 1, delete 1 elemento!
    listaDeDestinos.splice(1,1); // remove item
}else {
    console.log("Não é maior de idade e não é possível liberar a venda!")
}


console.log(`\n> `+listaDeDestinos);
