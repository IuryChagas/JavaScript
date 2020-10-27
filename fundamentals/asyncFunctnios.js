// Async functions

// Podemos criar funções assíncronas com a palavra reservada async;
//      >> Elas retornam uma Promise;
//      >> Se retornar algo, a promessa é resolvida, se der alguma exception a promessa é rejeitada.


async function somar(x, y){
    return x + y;
}

somar(2, 18).then(function(value){
    console.log(value)
})

// em resumo as Async functions são as promises em notação de função comum.
// obs: Se retornar algum valor, tal promise esta sendo resolvida,
//      caso contrário se tal promise retornar erro, estará sendo rejeitada!