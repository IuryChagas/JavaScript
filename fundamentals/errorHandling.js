// Error Handling (Try/Catch/Throw)

function handleErros(erro) {
    //throw new Error('vish!🤦🏾‍')
    //throw 10
    //throw true
    //throw 'msg!'
    throw {
        name: erro.name,
        msg: erro.message,
        date: new Date
    }
}
function  printNameYelled(obj) {
    // alguns códigos tem probabilidade maior de gerar erros, e são nesses casos que usa-se estes comandos.
    try {
        console.log(obj.name.toUpperCase() + '!!');
    } catch (e) {
        handleErros(e)
    }
}

const obj = { nxme: 'Lazarento'};
printNameYelled(obj);