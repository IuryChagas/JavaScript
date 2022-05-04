let n = 100;

const number = function(){
    let n = 50;
    return console.log(n);
}

console.log(n); // n << Escopo Global do script!
number(n); // n << Escopo Local/'interno' da função!

console.log(`---------`);

const y = 20; // y em escopo global
if(y < 30){
    let y = 5; // y em escopo local
    y *= y;
    console.log(y); // output do escopo local
}

console.log(`---------`);

let z = 3;

const multiply = function(v0, v1){
    let z = v0 * v1;

    console.log("output função: "+ z); // escopo da função

    if (z > 10){
        let z = 350;
        z++;
        console.log("output do if: "+ z); // escopo do if
    }
}
console.log("\noutput global: "+ z); // escopo global
multiply(3, 7); /// escopo da função