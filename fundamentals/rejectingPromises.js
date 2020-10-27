// Rejeitando Promises

// Além do resolve, Há o metodo reject, que é quando determianda lógica não satisfaz nosso programa.
// então podemos ir para outra com o reject, em vez do resolve;
// resolve e reject terminam a Promise, ou seja, não podemos chamar mais o then, por exemplo:


function checkSomething(num){
    return new Promise((resolve, reject) => {
        if (num == 2) {
                resolve(console.log("O número é 2"))
        }else{
            reject(new Error("\n\n ... Sua lógica Falhou miseravelmente! ... \n"))
        }
    })
}

checkSomething(3)
checkSomething(2)