console.log("## Trabalhando com listas ##\n");

// const salvador = `Salvador`;
// const saoPaulo = `São Paulo`;
// const rioDeJaneiro = `Rio de Janeiro`;

// console.log("Destinos possíveis:\n");
// console.log(salvador, saoPaulo, rioDeJaneiro);

const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
);

console.log("Destinos possíveis:\n");
console.log(listaDeDestinos);

listaDeDestinos.push('Curitiba');
console.log(listaDeDestinos);
            // à partir da posição 1, delete 1 elemento!
listaDeDestinos.splice(1,1);
    console.log(listaDeDestinos);

console.log(`\n> `+listaDeDestinos[1]);