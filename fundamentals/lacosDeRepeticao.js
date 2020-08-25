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
const destiny = "Curitiba";
let availableDestination = false;

const canBuy = buyerAge >= 18 || isAccompanied == true;

let cont = 0;
while(cont < listaDeDestinos.length){
    if (listaDeDestinos[cont] == destiny){
        availableDestination = true;
        break;
    }
    cont++;
}
console.log(`Destino disponível: `, availableDestination);
console.log(`\n> `+listaDeDestinos);