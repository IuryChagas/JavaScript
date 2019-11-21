let isActive = false;
console.log(isActive);

console.log('\n\n')


isActive = true;

console.log(typeof isActive);

//Técnica para converter algo que não é booleano para true/false
console.log('\n# Conversão p/ Booleano:'+ !!isActive);
console.log('\n# Inversão  da Lógica: '+ !isActive);


// Tudo que resolve para verdadeiro:

console.log('\n ### >> RESOLVE PARA TRUE << ###\n');
console.log(!!3); // Número posito
console.log(!!-1); // Número inteiro
console.log(!!' '); // Espaço em branco! 
console.log(!!'text'); // String
console.log(!![]); // Array
console.log(!!{}); // Objeto Literal
console.log(!!Infinity); // exemplo: divisão por zer0
console.log(!!(isActive = true)); // Situação de Atribuição! 

//  Tudo que resolve para Falso:

console.log('\n ### >> RESOLVE para FALSE << ###\n');
console.log(!!''); // string  vazia
console.log(!!0); // zero 
console.log(!!null); // Nulos
console.log(!!undefined) // Não definidos
console.log(!!(isActive = false)); // quando a atribuição é false

console.log('\n ### >> EXPRESSÃO DE VALIDAÇÃO << ###\n');

console.log(!!('' || null || 0 || ' ')); // retorna positivo, pois ao menos uma dessas expressões é true, nesse caso é o espaço em branco ' '
console.log(!!('' || null || 0 || 'Primeiro Valor positivo' || '123')); // retorna sempre o primeiro valor positivo! nesse caso, tanto string como 123 são True!

console.log('\n >> ## Ex: Validão real de nome ## << \n');

let name = ''; // caso o usuário não informa o nome, o retorno será "Desconhecido"

console.log('NOME DE USUÁRIO: ')
console.log(name || 'Desconhecido!\n\n'); // operação lógica com base em string!

