// a definição de blocos em js é definido por chaves{}, com exceção em uma estrutura if onde pode ser opcional
// no entanto ao definir sem as chaves, o if fica apenas com uma única sentença de código associado ao block!
// veja o exemplo sem as chaves:
function test1(num){
    if(num > 7)
        console.log(num) // por mais que haja indentação, sem as chaves é considerado apenas uma sentença.
    console.log('Final')
} //  resumidamente, o não uso da chaves pode ser uma boa opção APENAS quando a estrutura If tiver uma única sentença!
  //  Como conveção de código o ideal é usar sempre as chaves{}

//test1(6);
//test1(8);

function test2(num) {
    if(num > 7); { // ao usar os dois pontos, estou definindo vazio que o bloco console.log(num) não faz parte da sentença do if
               // por isso mesmo que o valor de test2(6) é menor que 7, é visualizado no output!
               // em outras palavras, o uso de ; é uma sentença de código vazio do qual esta atrelado ao if, separando do bloco console.log();
               //  conclusão: don't do this!
        console.log(num)
    }
}

test2(6);
test2(8);