const parOuImpar = (value) => {
    if(value % 2 == 0) {
       console.log("\n Número informado é: [PAR] ")
    }else(
       console.log("\n Número informado é: [IMPAR] ")
    )
}

parOuImpar(214);

const outputTest = () => {
    console.log(" console.log Ok!")
}

outputTest();

const soma = (a, b) => {
    return console.log(` ${a + b}`);
}

soma(500,500);

const raizQuadrada = (r) => { return r * r;}

raizQuadrada(5);

const raizQuadrada2 = t => t * t;
console.log(raizQuadrada2(4));