const name = "Iury";
const lastName = "Chagas";
const fullName = name+lastName;

let nOfCharacters = fullName.length;

let padStart = lastName.padStart(nOfCharacters, name);

console.log(fullName.length+": "+padStart);

const text1 = "In publishing and graphic design, Lorem ipsum is a placeholder text";
const text2 = " de Finibus Bonorum et Malorum";
const concat = text1+text2;

nOfCharacters = concat.length;
padStart = text2.padStart(nOfCharacters, text1);
console.log(concat.length+": "+padStart);


