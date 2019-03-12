const funcs = []
for (let fc = 0; fc <= 10; fc++){
    funcs.push(function(){
        console.log(fc);
    });
};
/**
 * Como o LET possui escopo de bloco, 
 * ela identifica o valor inicial e durante a execução da função!
 */
funcs[2]()
funcs[8]()
funcs[0]()