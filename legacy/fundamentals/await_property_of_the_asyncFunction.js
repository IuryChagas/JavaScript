// Nas async functions, podemos determinar uma instrução await;
// Que vai esperar uma promise ser resolvida, para apresentar os resultados:

function somarComDelay(a,b){
    return new Promise(resolve => {
        setTimeout(function(){
            resolve(a+b);
        }, 4000);
    })
}

async function soma(a,b,c){
    let x = somarComDelay(a,b)
    let y = c;

    return await x + y;
}

soma(1,2,3).then(value => console.log(value));