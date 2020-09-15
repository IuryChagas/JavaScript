// Object: Mutação (Mutability) - Um objeto pode herdar todas as características do outro, virando uma referência ao mesmo.

let carA = {
    company: "Tesla",
    price: 46.500,
    electric: true,
    absBrakes: true,
    model: 3
}

carB  = carA;

let carC = {
    company: "Tesla",
    price: 46.500,
    electric: true,
    absBrakes: true,
    model: 3
}

console.log("carB == carA: ", carB == carA);
console.log("carA == carB: ", carA == carB);
console.log("carC == carB: ", carC == carB);
console.log("carC == carA): ", carC == carA);

console.log("\n==================\n");

let avatar = {
    name: "Pedro"
}

let avatar2 = avatar;
console.log("avatar == avatar2: ", avatar == avatar2);

let avatar3 = {
    name: "Jose"
}
console.log("avatar3 == avatar: ", avatar3 == avatar);
avatar2.name = "Laisla";
console.log("avatar.name: ",avatar.name)
console.log("avatar2 == avatar: ", avatar2 == avatar);