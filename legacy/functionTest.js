
function sum (n1, n2, operator) { // exemplo basico de função!
    return eval(`${n1} ${operator} ${n2} `); // usando Template strings para fazer calculo
}
    console.log(sum(4, 4, "+"));


let languages = ['JavaScript', 'Python', 'Java', 'C', 'C++', 'Php', 'Swift', 'C#', 'Ruby', 'Objective-C', 'SQL'];

console.log(languages.length); // retorna a quantidade de elementos/dados do array!
 
languages.forEach(function(index, value){  // esta função retorna a posição do index e qual linguagem esta inserida nela! 
    console.log(value, index);
});