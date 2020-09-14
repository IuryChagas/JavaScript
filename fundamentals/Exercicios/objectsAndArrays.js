// Object: Podemos copiar propriedades de um obj para outro.

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