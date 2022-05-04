// nomenclatura: ``${};

const name = 'Keroline'
const concat = 'Hello ' + name + '!';
const template = ` 
    Hello
    ${name}!`

console.log(concat, template);

//expressoes...
console.log(`1 + 1 = ${12 + 10}`);

/**
 * Dentro de um TemplateString posso chamar uma função!
 * 
 * No exemplo abaixo a funçao up() retorna o texto em formatado em Maiúsculo
 */
const up = text => text.toUpperCase();
console.log(`Ei.. ${up('cuidado!')}`);