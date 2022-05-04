function potencia(base, exp=2){
    return Math.pow(base, exp);
}

console.log(potencia(2)); // como só foi passado um argumento, o parâmetro exp recebe o valor default 2.
console.log(potencia(2,2));
console.log(potencia(2,3));