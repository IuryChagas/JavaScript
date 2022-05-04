let telephone = /\d{4,5}-\d{4}/;

console.log('Status Telephone 1: ', telephone.test('4004-0000'))
console.log('Status Telephone 2: ', telephone.test('99999-9999'))
console.log('Status Telephone 3: ', telephone.test('99999-999'))

console.log('\n --------------------- \n')

let cep = /\d{2}.\d{3}-\d{3}/;

console.log('Status cep 1:', cep.test("80230050wr"))
console.log('Status cep 2:', cep.test("80.230-050"))


console.log('\n --------------------- \n')

let cep2 = /\d{5}-\d{3}/;

console.log('Status cep 1:', cep2.test("80230050wr"))
console.log('Status cep 2:', cep2.test("80.230-050"))
console.log('Status cep 3:', cep2.test("80230-050"))
console.log('Status cep 4:', cep2.test("ddddd-ddd"))
console.log('Status cep 3:', cep2.test("80230-0j0"))

console.log('\n --------------------- \n')

let celNumber = /\(\d{2}\)\d{5}-\d{4}/;

console.log('Status cel number 1:', celNumber.test("(00)00000-0000"))
console.log('Status cel number 2:', celNumber.test("(00)00000-0000fd"))