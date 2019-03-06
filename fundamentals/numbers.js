const weight1 = 1.0;
const weight2 = Number('2.0');

console.log(weight1, weight2);
console.log(Number.isInteger(weight1)); 
// or return false if weight1 = 1.1;

const evaluation1 = 9.871
const evaluation2 = 6.871

const total = evaluation1 * weight1 + evaluation2 * weight2;
const average = total / (weight1 + weight2);

console.log(average.toFixed(2)); 
/** 
 * OBS!
 * toFixed(n°) usado para ter maior controle sobre as casas decimais
 * onde (n°) especifica a quantidade de casas decimais quero após o . do número inteiro!
 * */

 console.log(average.toString(2)); // converteu para string modo binário!
 console.log(typeof average);

 // Some cares!

 console.log(7 / 0.0000);

//Operações de string com numeros!
 console.log('10' / 2);
 
/**
 * Esta operação não retorna o número exato devido à especificação
 * que o JS usa para processamento rapido!
 * Pois a especificação que retorna valores exatos tem baixa performance de processamento.
 */ 
console.log(0.1 + 0.7);

/**
 * Não é possível chamar diretamente um literal.função
 * mas é possível chamar um literal dentro de parêntese e ai sim chamar uma função!
 * 
 * obs: Eu na real, não entendi onde aplicaria esse recurso!
 */
// console.log(10.toString());
   console.log((10.453).toFixed(2));