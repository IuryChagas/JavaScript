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
const destiny = "São Paulo";

const canBuy = buyerAge >= 18 || isAccompanied == true;

let cont = 0;
while(cont < listaDeDestinos.length){
    if (listaDeDestinos[cont] == destiny){
        console.log('destino disponível');
    }else{
        console.log("destino indisponível");
    }
    cont++;

}

console.log(`\n> `+listaDeDestinos);