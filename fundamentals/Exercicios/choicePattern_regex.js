// Podemos colocar uma instrução na regex que funciona como um ||(or) das condicionais;

let fruits = /\d+ (bananas?|maçãs|laranjas)/; // retorne toda ocorrência onde houver digito(d+) 1espaço nomeDaFruta -- ?Significa que o primeiro caractere à frente do ? é opcional,
                                              //                                                                        Neste context retornará true se for palavra banana ou bananas

console.log('\nTem bananas: ', fruits.test("1 banana"))
console.log('Tem maçãs: ', fruits.test("25 batatas"))
console.log('Tem laranjas: ', fruits.test("8 laranjas"))


let name = /\w+: (Douglas|Wendvan|kerolini)/;

console.log('\nTem nome Douglas: ', name.test("name: fajsldf"))
console.log('Tem nome Wendvan: ', name.test(" name: Wendvan"))
console.log('Tem nome kerolini: ', name.test(" name: kerolini"))