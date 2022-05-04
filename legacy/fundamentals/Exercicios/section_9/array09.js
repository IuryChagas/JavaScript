// Criar um array à partir de uma frase.

let phrase = "imprima cada palavra do array no console";

let arr = phrase.split(" ");

console.log(arr);

for(let i = 0; i < arr.length; i++){
    console.log(arr[i]);
}