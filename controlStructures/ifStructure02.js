// a definição de blocos em js é definido por chaves{}, com exceção em uma estrutura if onde pode ser opcional
// no entanto ao definir sem as chaves, o if fica apenas com uma única sentença de código associado ao block!
// veja o exemplo sem as chaves:
function test1(num){
    if(num > 7)
        console.log(num) // por mais que haja indentação, sem as chaves é considerado apenas uma sentença.
    console.log('Final')
} //  resumidamente, o não uso da chaves pode ser uma boa opção APENAS quando a estrutura If tiver uma única sentença!
  //  Como conveção de código o ideal é usar sempre as chaves{}
test1(6);
test1(8);