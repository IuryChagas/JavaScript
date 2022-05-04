let dateValidation = /^[0-9]{2}[/][0-9]{2}[/][0-9]{4}/;

console.log('\n99/99/9999: ', dateValidation.test("99/99/9999"))
console.log(' 0/00/0000: ', dateValidation.test("0/00/0000"))
console.log('    0/0/00: ', dateValidation.test("0/0/00"))

console.log('=================================')

let dateOfBirthValidation = /[0-31]{2}[/][0-12]{2}[/][1920-2020]{4}/;

console.log('\n99/99/9999: ', dateOfBirthValidation.test("99/99/9999"))
console.log(' 0/00/0000: ', dateOfBirthValidation.test("0/00/0000"))
console.log('    0/0/00: ', dateOfBirthValidation.test("0/0/00"))
