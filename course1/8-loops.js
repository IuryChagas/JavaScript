const destinationList = new Array(
    `Cuiaba`,
    `Rio de Janeiro`,
    `Curitiba`,
    `São Paulo`
);


console.log("\n## Destinos disponíveis ##\n");
//console.log(`>> ${destinationList}\n`);

const buyerAge = 18;
let accompanied = false;
//let purchasedTicket = false;
const destiny = 'São Paulo';
const authorizedPurchase = (buyerAge >= 18 || accompanied == true );

let count = 0;

while (count < destinationList.length ) {
    if (destinationList[count] == destiny ) {
        console.log(`Destino existe`);
        break; 
    }
    console.log(`indice|${count}| > ${destinationList[count]}`);
    ++count;
}

console.log("\nDestino existe: ", destiny);

if (destiny && authorizedPurchase) {
    console.log("status: Compra autorizada!");
    console.log("Boa viagem!");
}else {
    console.log("Desculpe, houve um erro!");
}