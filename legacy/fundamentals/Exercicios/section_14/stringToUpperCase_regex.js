console.log('Validar apenas strings e em Upper Case\n')
let stringToUpperCase = /[A-Z]/;

console.log('   lorem >> ', stringToUpperCase.test("lorem"))
console.log('   Lorem >> ', stringToUpperCase.test("Lorem"))
console.log('   LOREM >> ', stringToUpperCase.test("LOREM"))
console.log('   01234 >> ', stringToUpperCase.test("01234"))

console.log('\nValidar strings terminadas com ID\n')

let stringID = /\d+[ID]/;

console.log('   1054ID     >> ', stringID.test("1054ID"))
console.log('   ID         >> ', stringID.test("ID"))
console.log('   afskdflçID >> ', stringID.test("afskdflçID"))
console.log('   58479ID    >> ', stringID.test("58479ID"))
console.log('   58479      >> ', stringID.test("58479"))

console.log('\n############ Resolução 2 ############\n')

let stringID2 = /\d+ID\b/;

console.log('   384284ID   >> ', stringID2.test("384284ID"))
console.log('   384284     >> ', stringID2.test("384284"))
console.log('   rtgpetgj   >> ', stringID2.test("rtgpetgj"))
console.log('   rtgpetgjID >> ', stringID2.test("rtgpetgjID"))
console.log('   5983336ID  >> ', stringID2.test("5983336ID"))