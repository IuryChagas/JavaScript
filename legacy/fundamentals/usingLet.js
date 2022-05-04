var number = 1;

{ // let tem escopo de bloco, ou seja, por padrão é definida apenas no local!
    let number = 2;
    console.log('inside: ', number);
}
console.log('outside: ', number);

/**
 * Se no local a variavel let não encontrar o nome definido, ela busca no bloco externo mais proximo!
 * Exemplo:
 */

 let externalBlock = 5;
 let notFoundInInernalBlock = 10;
 {
     let internalBlock = 4;
     console.log('Internal block: ', notFoundInInernalBlock, ` *not found in internal block, 
                     >Recursive value found in external variable! `);
 }
 console.log('External Block: ',externalBlock);


/**   ####|  NOTES:  |####
 * > Varivais definidas com a palavra reservada var: Tem escopo Global e escopo local em funções!
 * > Varivais definidas com a palavra reservada let: Tem escopo Global, Escopo de Função e Escopo de Bloco!
 */