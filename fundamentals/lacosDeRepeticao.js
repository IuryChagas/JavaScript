const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
);

console.log("Destinos possíveis:\n");
console.log(listaDeDestinos);

const buyerAge = 21;
const isAccompanied = false;
const hasTicket = true;
const destiny = "São Paulo";
let availableDestination = false;

const canBuy = buyerAge >= 18 || isAccompanied == true;


for(let i = 0; i < listaDeDestinos.length; i++){
    if (listaDeDestinos[i] == destiny) {
        availableDestination = true;
    }
}
// while(cont < listaDeDestinos.length){
//     if (listaDeDestinos[cont] == destiny){
//         availableDestination = true;
//         break;
//     }
//     cont++;
// }
console.log(`Destino disponível: `, availableDestination);
if (canBuy && availableDestination) {
    console.log("Venda de ticket para o destino disponível");
}else{
    console.log("Desculpe, não foi possíveis prosseguir com a solicitação!")
}
console.log(`\n> `+listaDeDestinos);