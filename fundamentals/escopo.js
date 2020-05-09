let n = 100;

const number = function(){
    let n = 50;
    return console.log(n);
}

console.log(n); // n << Escopo Global do script!
number(n); // n << Escopo Local/'interno' da função!