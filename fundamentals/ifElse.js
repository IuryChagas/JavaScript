const printResult = function(note) {
    if(note >= 7) {
        console.log("Approved!");
    }else{
        console.log("Reproved!");
    }
}
printResult(7.1);
printResult(6.9);

// Isso em teoria deveria retornar erro, porem como js é uma linguagem fracamente tipada
// o js interpreta a string como falsa e como definido a cima,
// qualquer valor que não seja maior ou igual à 7 retornará "Reproved!"

printResult("Ops!");