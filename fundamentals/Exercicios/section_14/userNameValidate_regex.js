let userNameValidateRegex = /^(?=.{3,16}$)[a-z0-9-_ ]/;

console.log(userNameValidateRegex.test("12457"))
console.log(userNameValidateRegex.test("asdf5"))
console.log(userNameValidateRegex.test("_#"))
console.log(userNameValidateRegex.test("@&¨%"))
console.log(userNameValidateRegex.test("iury9874"))