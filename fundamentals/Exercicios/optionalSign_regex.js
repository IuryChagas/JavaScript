const pattern = /Abacax?i/; // Aqui estou dizendo que o x no padrão Abacaxi é opcional, então retorne true toda ocorrência em que houver abacaxi ou abacai

console.log('Status Abacaxi: ', pattern.test('Abacaxi'))
console.log('Status Abacai: ', pattern.test('Abacai'))
console.log('Status Abcai: ', pattern.test('Abcai'))


console.log('\nPadrão que retorna true se encontrar 8 digitos na string\n')

let cep = /\d\d\d\d\d\d\d\d/;

console.log('Status cep1:', cep.test("80230050"))
console.log('Status cep2:', cep.test("8023005wr"))
console.log('Status cep3:', cep.test("80230050wr")) // como é encontrado a ocorrencia de 8 digitos o padrão regex definido retorna true...
console.log('Status cep4:', cep.test("80230050wr") && "80230050wr".length == 8) // para contornar isso, é possível trabalhar metodos do javascript com regex para consultas mais estritas

