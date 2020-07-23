const destinationList = new Array(
    `Curitiba`,
    `Rio de Janeiro`,
    `Cuiaba`,
    `São Paulo`
);


console.log("\n## Destinos disponíveis:##\n\n"+ destinationList);


const buyer = 17;
const emancipated = false;
const accompanied = true;

if (emancipated || buyer >= 18 || accompanied){
    console.log(`## Compra realizada ##\n   Destino: ${destinationList[0,2]}`);
}else {
    console.log("Você é menor de idade, não poderá comprar!");
}