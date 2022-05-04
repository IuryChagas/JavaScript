const name = 'Mundo';
const concat = 'Olá '+ name +'!';

console.log('\n## Concatenação comum ##\n'+ concat);

// concatenação com template String >> `` + ${}
const templateName = `
    Olá
    ${name}!`;

console.log('\n## Concatenação utilizando TemplateString ##\n'+ templateName);

const userName = 'IuryCh';
const powerString = `\n############\n\n Olá ${userName}.. Seja bem vindo!`;

console.log(powerString);

// expressões:
console.log(`\n Calc:: 5 + 5 = ${5 + 5}\n`);

// função em template String:
const toUp = text => text.toUpperCase();

console.log(`\nEi.. ${toUp('atenção!, atenção!')}!\n\n`);
