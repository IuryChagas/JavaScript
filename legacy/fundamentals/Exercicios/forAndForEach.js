// Loops em Arrays

let numbers = [1, 5, 10, 15, 20, 25];

for (let i = 0; i < numbers.length; i++) {
    const element = numbers[i];
    console.log(element);
}
console.log("========================= \n");
// forEach não retorna nenhum valor, seu uso é mais indicado para manipular o array e por exemplo, fazer algum calculo no array.
// ForEach executa uma função para processamento dos dados, e essa função aceita até três parâmetros. 
// Exemplo abaixo:

let people = ['Jessica', 'Melanie', 'Paula'];

people.forEach((currentValue, index, completeArray) => {
    console.log(index, currentValue, completeArray);
});

console.log("\n========================= \n");

numbers.forEach((currentValue, index) =>{
    console.log("[ ",index," ]  ", currentValue);
});

console.log("\n========================= \n");
// Objects arrays

let product = [
    {
        productName: 'SmartPhone',
        productPrice: 1200.00,
        productDiscount: 0.20
    },
    {
        productName: 'Notebook',
        productPrice: 2500.00,
        productDiscount: 0.30
    },
    {
        productName: 'SmartTV',
        productPrice: 3500.00,
        productDiscount: 0.35
    }
];
// mostrar objeto inteiro
product.forEach((currentObj) =>{
    console.log(currentObj)
});

console.log() // mostrar indice, nome e preço do produto
product.forEach((currentObj, indexPosition) =>{
    console.log(indexPosition, "Device: ",currentObj.productName, " $", currentObj.productPrice)
});

console.log() // Calcular valor de desconto e adicionar novo atributo 'promotion value' no objeto
product.forEach((currentObj, indexPosition) =>{
    let discountValue = currentObj.productPrice * currentObj.productDiscount;
    let promotionValue = currentObj.productPrice - discountValue;
    currentObj.promotionValue = promotionValue;
    console.log(indexPosition, "Device: ",currentObj.productName," $", currentObj.productPrice, " Discount Value: -",discountValue, " Promotion Value", currentObj.promotionValue)
});

console.log() // mostrar objeto com o novo atributo adicionado
product.forEach((currentObj) =>{
    console.log(currentObj)
});