// console.log(true ? 1 : 2); onde o '?' interrogação corresponde à frase >> "Se for verdade, execute 1".
// e ':' dois pontos corresponde à frase "Senão então execute 2"
// resumo: true "É" ? execute x "Senão" : execute y.


console.log(5 > 3 ? true : false);
console.log(10 == "10" ? true : false);
console.log(10 === "10" ? true : false);
console.log(false ? 5 : 4); // o valor de parâmetro é false então executará a 2° instrução que é : 4.
console.log(true ? 5 : 4); //  o valor de parâmetro é true então executará a 1° instrução que é ? 5.
console.log("Iury" == "Iury" ? "Olá Iury" : "Quem é você?");
console.log("Iury" == "Chagas" ? "Olá Iury" : "Perá lá!\nQuem é você?");
console.log(true === true ? "1° instrução retorna em caso positivo" : "2° instrução retorna apenas em caso de excessão");
console.log(true === false ? "1° instrução retorna em caso positivo" : "2° instrução retorna apenas em caso de excessão");
