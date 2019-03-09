// 1° função sem retorno!
function printSum(a, b) {
    console.log(a + b)
}
printSum(5, 5);
printSum(4); // retorna NotaNumber 'NaN' pois não foi especificado valores do parâmetros corretamente
printSum(4, 8, 2, 88, 45); // a lógica considera apenas os dois primeiros números!
printSum();// Parâmetros ñ definidos, ñ retorna erro, indica qe função sta funcionando ms sem parâmetros

// 2° função com retorno!

function division(c, d = 10) {
    return c * d
}
console.log(division(2, 2)); // a função identifica qe o valor de b foi substituido por outro valor!
console.log(division(2)); // a função identifica qe o valor de b é 10 e então executa a ação!
division(5, 2);
