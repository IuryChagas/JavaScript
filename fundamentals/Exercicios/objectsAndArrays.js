// Object: Podemos visualizar todas as chaves de um objeto com o método Keys() do Object

let carA = {
    propA_company: "Tesla",
    propA_electric: true,
    propA_engine: 3.0,
    propA_model: 3,
}

let carB = {
    propB_price: 46.500,
    propB_absBrakes: true
}

Object.assign(carA, carB);
console.log("Car[A]:", carA);

Object.assign(carB, carA);
console.log("Car[B]:", carB);

console.log("\n ======================================== \n");

console.log(Object.keys(carA)); // para visualizar apenas as chaves sem os valores do objeto.
console.log(carA);

console.log(Object.keys(carB));
console.log(carB);