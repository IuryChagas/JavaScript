const plataforma = "Udemy";

console.log('\nNome da const: plataforma');
console.log('Valor da const: '+ plataforma);

// retorna o tipo da variavel
console.log('Tipo da const: '+ typeof plataforma);
console.log('Letra no indice {0}: '+ plataforma.charAt(0));
console.log('Letra no indice {1}: '+ plataforma.charAt(1));
console.log('Letra no indice {2}: '+ plataforma.charAt(2));
console.log('Letra no indice {3}: '+ plataforma.charAt(3));
console.log('Letra no indice {4}: '+ plataforma.charAt(4));

const name = "Iury Chagas";

console.log('\nName: '+ name);

// retorna o valor da posição do indice
console.log('Letra posição indice {0}: '+ name.charAt(0));
console.log('Letra posição indice {5}: '+ name.charAt(5));

// retorna o código do caractere conforme tabela unicode
console.log('Caractere Unicode da posição {5}: '+ name.charCodeAt(5));

console.log('\n');

// concatenação
console.log('Plataforma: '.concat(plataforma).concat('!'));

console.log('\n');

// retorna a posição no indice
console.log('Letra >> I <<: Posição no indice {'+ name.indexOf('I')+ '}');
console.log('Letra >> U <<: Posição no indice {'+ name.indexOf('u')+ '}');
console.log('Letra >> R <<: Posição no indice {'+ name.indexOf('r')+ '}');
console.log('Letra >> Y <<: Posição no indice {'+ name.indexOf('y')+ '}');

console.log('\n\n');
