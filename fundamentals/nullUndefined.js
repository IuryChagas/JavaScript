let value // não inicializada!

console.log(value); // variavel não definida! foi declarada mas não definida!
// console.log(value2); // Variavel NEM foi declarada "is not defined!"

value = null // significa ausância de valor, ou seja, não aponta para nenhum partição da memória!

console.log(value);
//console.log(value.toString()) // retorna erro pois não é logico ler uma propriedade de uma variavel anulada!

const product = {}
console.log(product.price) // identifica que o objeto product existem porem a propriedade price não existe!
// console.log(product.price.a) // retorna erro! pois não é logico ler um dado de algo não definido!

product.price = `R$ ${10.50}`;
console.log(product);

product.price = undefined // Evitar atribuir undefined!
console.log(!!product.price);
delete product.price
console.log(product);

product.price = null // para indicar que tal produto esta sem preço o recomendavel é usar null!
console.log(!!product.price) // retornar false pois o preço do produto esta nulo!
console.log(product);
