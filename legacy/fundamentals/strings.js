const university = "Singularity";

console.log(university.charAt(4));
console.log(university.charAt(6));

/**
 * Retorna o valor do array conforme tabela Unicode®
 * https://unicode-table.com/en/
 * valor do array: 'g';
 * return1: HTML-code: &#103;
 * return2: Unicode number: U+0067;
 */
console.log(university.charCodeAt(3));

/**
 * retorna o valor do indice em que o caractere esta inserido!
 */
console.log(university.indexOf('l'));

/**
 * substring() retorna o resto da string à partig do valor de indice definido!
 * exemplo abaixo: 
 * 5 = l
 * substring = larity
 */
 console.log(university.substring(5));

 console.log(university.substring(3, 11));

 // função para concatenação! .concat()
 console.log(university.concat(' University').concat('!📚'));
 // uo usando o operador + do qual no contexto de string ele concatena!
 console.log(university + ' University' + '!📚');

 // função para substituir valores!
 console.log(university.replace(3, 'e'));

// convertendo strings separadas por(,) para estrutura Array
 console.log('Iury, Arthur, Wendvan'.split(','));
