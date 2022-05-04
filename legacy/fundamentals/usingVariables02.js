/**
 * Dentro do mesmo escopo você deve ter variaveis com nomes diferentes para não conflitar!
 * por isso deve-se evitar criar variaveis no escopo global para evitar sobrescrição de nomes!
 * 
 * #fujaDoEscopoGlobal :)
 */

var number = 1;
{
    // Fora de uma função, qualquer outro tipo de bloco a variavel do tipo var é global!
    var number = 2;
    console.log('inside: ', number);
}
console.log('outside:', number);