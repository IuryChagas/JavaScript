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