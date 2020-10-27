// Falhas nas Promises

// Uma Promise pode falhar, podemos reter esse erro com um método chamado catch

// Com ele podemos exibir o erro no console, por exemplo, e fazer o debug no código;

let promiseError = Promise.resolve(new Error("\n\n ... Algo deu errado! ...\n"))

promiseError
    .then((value) => console.log(value))
    .catch(reason => console.log("Error:"+ reason))