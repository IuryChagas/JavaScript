console.log("Working with lists\n");

// const curitiba = `Curitiba`;
// const salvador = `Salvador`;
// const saoPaulo = `São Paulo`;
// const rioDeJaneiro = `Rio de Janeiro`;

const destinationsList = new Array (
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
); 
destinationsList.push(`Curitiba`, `Cuiaba`);

console.log("Destination list:\n");
// console.log(curitiba, salvador, saoPaulo, rioDeJaneiro);
console.log(destinationsList);

destinationsList.splice(4,1);

console.log(destinationsList);

destinationsList.splice(3,2);
console.log(destinationsList);

console.log("\nactual City: "+ destinationsList[0]);

const age = 18;

if (age >= 18) {
    destinationsList.push(`Belo Horizonte`);
    console.log(destinationsList);
} else {
    console.log(destinationsList.reverse());
}

console.log(destinationsList.reverse());

console.log("\n");
//////////////////////////

const destinationList2 = new Array (
        `Florianópolis`,
        `Cuiaba`,
        `Sorocaba`,
        `Itú`
    );

console.log(destinationList2);

console.log("\n");

destinationList2.push(`Curitiba`);
    console.log(destinationList2);

destinationList2.splice(0,1)
    console.log(destinationList2);

console.log(`\n${destinationList2[3]}`);