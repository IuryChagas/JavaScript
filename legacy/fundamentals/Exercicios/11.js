let name = "Rubens";
let age = 19;
let doc = false;

if (age >= 18 && doc == false) {
    console.log(`Você ainda não pode dirigir ou pilotar, \n[Motivo]: Não possui CNH ativa!`);
}else if (age >= 18 && doc == true) {
    console.log(`${name}, você tem ${age} anos e possui CNH ativa!`);
}else {
    console.log(`${name}, você é menor de idade!`);
}
