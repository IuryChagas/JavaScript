let isActive = false;
    console.log(isActive); // retorna false 

isActive = true;
    console.log(isActive); // retorna true

isActive = true;
    console.log(!isActive); // com uma ! nega o valor inicial, portanto retorna false  

isActive = true;
    console.log(!!isActive); // com duas !! anula a negação do valor inicial, portanto retorna true


/** Situações da qual estarei trabalhando com tipos que não é verdadeiro ou falso, 
 *  mas que no contexto é requerido um verdadeiro ou falso.
 * >> Opearação iniciada com !! força uma conversão para verdadeiro ou falso.
 */
console.log('||::: Operações que retornam Verdadeiro: :::||');
console.log(!!3);
console.log(!!-1); // Em Js todos os números inteiros são verdadeiros com exceção do Zer0! 
console.log(!!' '); //espaço em branco entre '  '!
console.log(!!'text');
console.log(!![]); // um array representa um valor vardadeiro mesmo que vazio!
console.log(!!{}); //Objeto literal!
console.log(!!Infinity); // uma divisão por zer0 por exemplo que retorne infinito!
console.log(!!(isActive = true)); // Valor da atribuição

console.log('||::: Operações que retornam Falso: :::||');
console.log(!!0);
console.log(!!''); // string vazio!
console.log(!!null);
console.log(!!NaN);
console.log(!!undefined);
console.log(!!(isActive = false));

console.log('Resumo...');
console.log(!!('' || null || 0 || ' ')); //''Vazio é falso, null é false, 0 é false, ' 'blank space é True!
console.log(!!('' || null || 0 || 'Text!')); //retornar o único ou primeiro valor verdadeiro da operação!

console.log('|::: Exemplo em uma contexto real :::|');

let name = ''; //string vazia!

console.log(name || 'unknown!'); // Se o usuário inserir o nome, retornara o nome, caso contrario retornara unknown!