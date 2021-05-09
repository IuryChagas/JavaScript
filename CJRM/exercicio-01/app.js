/*
01 - Neste diretório (exercicio-01), há um index.html vazio.

Faça o seguinte:

- Declare uma marcação HTML básica nele;
- Modifique a linguagem para português do Brasil;
- Remova as meta tags desnecessárias;
- Modifique o title para "Exercício 01";
- E linke este arquivo, app.js, antes do fechamento da tag body.
*/
console.info("## Exercise >> 01")

let checklist = `
- [x] - Declare uma marcação HTML básica nele.
- [x] - Modifique a linguagem para português do Brasil.
- [x] - Remova as meta tags desnecessárias.
- [x] - Modifique o title para "Exercício 01".
- [x] - E linke este arquivo, app.js, antes do fechamento da tag body.
`
console.log(checklist,'\n')

/*
02 - Inicie o seu servidor local e abra o console do browser.
*/

console.info("## Exercise >> 02")

checklist = `
- [x] - Inicie o seu servidor local.
- [x] - abra o console do browser.
`
console.log(checklist,'\n')

/*
03 - Para certificar-se que este arquivo realmente está linkado, exiba a frase  
"JS is Awesome!" em um alert no browser.

Como mencionei durante a aula: não se preocupe em entender 100% o que os comandos  
"alert" e "console" fazem. Nós falaremos sobre eles mais à frente =)

Utilize os espaços entre os comentários abaixo para executar os códigos dos 
exercícios. Inclusive o alert mencionado acima.
*/
console.info("## Exercise >> 03")

// this.alert('JS is Awesome!')

checklist = `
- [x] - exiba a frase "JS is Awesome!" em um alert no browser.
`
console.log(checklist,'\n')

/*
04 - Comente o alert que você escreveu acima, utilizando o comentário de uma linha.
*/
console.info("## Exercise >> 04")

checklist = `
- [x] - Comente o alert que você escreveu acima.
`
console.log(checklist,'\n')

/*
05 - Declare uma const "myBirthYear", que recebe o ano do seu nascimento, com 4  
dígitos. Ex.: 1930.
*/
console.info("## Exercise >> 05")

const myBirthYear = 1842

checklist = `
- [x] - Declare uma const "myBirthYear" que recebe um ano de nascimento.
`
console.log(checklist,'\n')

/*
06 - Declare uma const "currentYear", que recebe o ano atual, com 4 dígitos.
*/
console.info("## Exercise >> 06")

const currentYear = 2021

checklist = `
- [x] - Declare uma const "currentYear", que recebe o ano atual, com 4 dígitos.
`
console.log(checklist,'\n')

/*
07 - Exiba as const "myBirthYear" e "currentYear", lado a lado, no console do browser.
*/
console.info("## Exercise >> 07")

checklist = `
- [x] - Exiba as const "myBirthYear" e "currentYear", lado a lado no console.
`
console.log(checklist)
console.log(myBirthYear, currentYear)
console.log('\n')

/*
08 - Experimente.

- Declare uma const "myAge", que recebe o ano atual subtraído pelo ano do seu  
nascimento. Mas sem digitar os números manualmente.

Você pode utilizar o sinal de menos (-) entre os dois valores e verificar o que  
acontece. 

- Exiba a "myAge" no console.
*/
console.info("## Exercise >> 08")

const myAge = currentYear - myBirthYear

checklist = `
- [x] - Declare uma const "myAge", que recebe o ano atual subtraído pelo ano do seu nascimento.
`
console.log(checklist)
console.log(myAge)
console.log()

/*
09 - Antes do console.log abaixo, declare uma const "ten", que recebe o número  
10 e:

- Descomente o console.log;
- Substitua a palavra "valor1" pelo ano atual somado à 10;
- Substitua a palavra "valor2" pela sua idade somada à 10;
- Os números não devem ser digitados manualmente;
- Observe o resultado no console do browser.

Não se assuste com as crases e os cifrões. Conversaremos mais sobre operações  
matemáticas e strings (textos) em breve =)
*/
console.info("## Exercise >> 09")
const ten = 10

checklist = `
- [x] - Substitua a palavra "valor1" pelo ano atual somado à 10;
- [x] - Substitua a palavra "valor2" pela sua idade somada à 10;
`
console.log(checklist)
console.log(`Em ${currentYear + ten}, estarei com ${myAge + ten} anos.`)
console.log('\n')

/*
10 - Abra o site abaixo no browser e faça o seguinte:

http://whathappenedinmybirthyear.com/

- Abra o console do devtools;
- Provavelmente, haverão alguns warnings nele. Pressione ctrl + L para limpá-lo;
- No console do devtools, declare uma const "myBirthYear" que recebe o ano em que  
você nasceu (4 dígitos) e pressione enter;
- No final da 1ª linha do código abaixo, substitua SEU_ANO_DE_NASCIMENTO pelo uso  
da const myBirthYear;
- Cole as duas linhas de código no console, pressione enter, feche o console e  
veja o que acontece.

document.querySelector('#birthYear').value = SEU_ANO_DE_NASCIMENTO
document.querySelector('.formButton').click()
*/
console.info("## Exercise >> 10")

checklist = `
- [x] - let myBirthYear = 1042
- [x] - document.querySelector('#birthYear').value = myBirthYear
- [x] - document.querySelector('.formButton').click()
`
console.log(checklist, '\n')
