const regex_1 = /[12345]/;

console.log("\nStatus: ", regex_1.test("Eu preciso de 6!"))
console.log("Status: ", regex_1.test("Temos o número 2"))
console.log("Status: ", regex_1.test("Temos o número 23"))
console.log("Status: ", regex_1.test("Temos o número 25"))

console.log("====================================")

const regex_2 = /[0-9]/; // possui números entre 0 e 9
    console.log("\nStatus: ", regex_2.test("Temos os números 25155759"))

const regex_3 = /[1-15]/;
    console.log("Status: ", regex_3.test("Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"))

