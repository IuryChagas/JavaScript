//  Podemos escrever um set que aceitam tudo, menos alguns caracteres com o not;
// Combinações serão aceitas, o negado é apenas se bate com o set;

let ocurrenceBetween123 = /[^123]/;

console.log('Status {1112}: ', ocurrenceBetween123.test("1112")) // Ocorre 12 portanto bate com o |12 3
console.log('Status    {1}: ', ocurrenceBetween123.test("1")) // Ocorre 1 portanto bate com o |1 23
console.log('Status   {23}: ', ocurrenceBetween123.test("23")) // Ocorre 32 portanto bate com o 1 |23
console.log('Status   {13}: ', ocurrenceBetween123.test("13")) // Ocorre 13 portanto bate com o |1 2 |3
console.log('Status   {14}: ', ocurrenceBetween123.test("14")) // Não ocorre 14 portanto não bate em nenhuma combinação entre 123


console.log('\n### Negar apenas quando tiver ocorrências isoladas de A e B ou entre AB ###\n')
let notAorB = /[^ab]/; // Só vai negar o A e B

console.log('Status {a}: ', notAorB.test('a'))
console.log('Status {b}: ', notAorB.test('b'))
console.log('Status {ab}: ', notAorB.test('ab'))
console.log('Status {ba}: ', notAorB.test('ba'))
console.log('Status {aqui também tem ab}: ', notAorB.test('aqui também tem ab'))
console.log('Status {Aqui tem a}', notAorB.test('Aqui tem a'))


console.log('\n### Not A to Z ###\n')

let notAToZ = /[^a-z]/;

console.log('Status {askdfljasjdfkalsdf}:',notAToZ.test("askdfljasjdfkalsdf"))
console.log('Status {""}:', notAToZ.test(""))
console.log('Status {aqui tem entre a e z}: ', notAToZ.test("aqui tem entre a e z"))

console.log('\n### A to Z ###\n')

let AToZ = /[a-z]/;

console.log('Status {askdfljasjdfkalsdf}:', AToZ.test("askdfljasjdfkalsdf"))
console.log('Status {""}:', AToZ.test(""))
console.log('Status {aqui tem entre a e z}: ', AToZ.test("aqui tem entre a e z"))