// Em JavaScrip uma variavel definida com var possui apenas 2 escopos! Local e Global

{
    {
        {
            {
                // Uma variavel definida fora de uma função! por padrão é global!
                var hadouken = 'hadouken!'
                console.log(hadouken);
            }
        }
    }
}
console.log(hadouken);

function testLocal() {
    var local = 42;
    console.log(local); // mostra pois esta dentro do escopo local!
}
testLocal();
console.log(local); // ReferenceError: local is not defined! pq a var existe apenas no escolo interno da fun!


/**
 * 
 * Evitar definir variaveis no escopo global pois apesar de estarem acessiveis, 
 * qualquer reescrita dessas variaveis certamente causara problemas!
 * 
 */
