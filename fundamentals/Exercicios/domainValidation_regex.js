let domainValidation = /[?www.]\w+\.com|\.com\.br|\.org/; // Se um domínio começar com www.{nomeDoDominio}.com ou .com.br ou .org então será considerado domínio válido e a função deverá retornar true
                    // [] = conjunto, [?www.] = significa que o www. é opcional

console.log('status domain {google}:', domainValidation.test("www.google.com"))
console.log('status domain {test}:', domainValidation.test("www.test"))
console.log('status domain {test1}:', domainValidation.test(".test1.co"))
console.log('status domain {test2}:', domainValidation.test("test2.co"))
console.log('status domain {khanacademy}:', domainValidation.test("www.khanacademy.org/"))
console.log('status domain {khanacademy}:', domainValidation.test("khanacademy.org"))

