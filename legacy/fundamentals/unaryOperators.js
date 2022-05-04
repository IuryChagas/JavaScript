let num1 = 1;
let num2 = 2;

num1++;
 console.log(num1);
--num1;
 console.log(num1);

 console.log(++num1 === num2--); 
 // retorna verdadeiro pois seguindo a ordem de precedencia de operadores quando o comando ++num1 foi lido
 // a var num2 ainda é igual à 2. Logo, apos variavel 1 receber +1: o resultado é 2 === 2 = true!