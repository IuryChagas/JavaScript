let emailValidation = /\w+\@\w+\.\w+/;

console.log('\nEmail >> {test@email.com}:',emailValidation.test("test@email.com"))
console.log('Email >> {fake@.com}:',emailValidation.test("fake@.com"))
console.log('Email >> {2020f@fas5df2}:',emailValidation.test("2020f@fas5df2.fasd"))