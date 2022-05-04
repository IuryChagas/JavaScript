// Resolvendo várias Promises

// com o método all, Podemos resolver várias promessas de uma vez só;

// passamos elas por um array e quando a última for resolvida, receberemos a resposta;

const p1 = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve(1000)
    }, 2500)
})

const p2 = Promise.resolve(5)

const p3 = new Promise(function(resolve, reject){
    resolve(10)
})

Promise.all([p1, p2, p3]).then((values) => console.log(values))