//  as expressões regulares no JavaScript são um tipo de objeto;
// podemos instancia-la de duas formas:

let regex_model1 = new RegExp("teste");
let regex_model2 = /teste/;

// Depois da definição do padrão por meio da regex, Utilizamos o método test() para verificar se o padrão é o retornado.
// Com isso vamos receber de respota true or false:

console.log(/testando/.test("ttttestandoo")); // <-- retorno true
console.log(/testando/.test("asdtestasd")); // <--- retorno False


console.log("=============================");

regex_model2 = /bola/;

console.log(regex_model2.test("tem bola?")); // <--- retorno true
console.log(regex_model2.test("Não tem")); // <-- retorno false


console.log("=============================");

regex_model1 = new RegExp("funfo");

console.log(regex_model1.test("Agora não deu certo!"));     // retorno false
console.log(regex_model1.test("Agora funfou certinho!"));   // retorno true


console.log("=============================");

let frase = /guitarrista/;
let text = "Tem guitarrista na banda?";

console.log(frase.test(text));
console.log(/baterista/.test("a banda tem um baterista mão de alface!")); // o método .test() pode ser usado diretamente na regex inline!