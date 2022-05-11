console.info(
    `
    \n:::::::::::::::::::::::::::   EXERCISES CHAPTER 03   :::::::::::::::::::::::::::
    `
  )

const section = num => {
    const sectionTitle = `\n:::::: Exercise ${num >= 0 && num < 10 ? `0${num}` : num } ::::::\n`
    return console.info(sectionTitle)
}
const result = result => {
    return console.log(' result >> ', result)
}

/*
  01 - Suba o seu servidor local e:

  - Armazene em uma constante "my3FavoriteTVShows" suas 3 séries favoritas;
  - Se você não assiste séries, armazene seus 3 filmes favoritos;
  - Armazene em uma constante "sentence" a frase abaixo, modificando "SÉRIE_01,  
    SÉRIE_02 e SÉRIE_03" para as suas séries favoritas;
  - O "e" antes do nome da última série deve ser mantido;
  - Forme essa frase sem digitar o nome das séries (claro) e sem utilizar  
    a notação "array[index]";
  - Exiba a frase no console.

  "Minhas 3 séries favoritas são: SÉRIE_01, SÉRIE_02 e SÉRIE_03."
*/
section(1)

const my3FavoriteTVShows = ['Game Of Thrones', 'Vikings', 'The Queen\'s Gambit']

const lastTVShow = my3FavoriteTVShows[my3FavoriteTVShows.length -1]
const charToReplace = `, ${lastTVShow}`
const sentence = `Minhas 3 séries favoritas são: ${my3FavoriteTVShows.join(', ')}.`.replace(charToReplace, ` e ${lastTVShow}`)

result(sentence)

/*
  02 - Exiba no console um boolean indicando se o array de séries que você criou possui 3 itens.
*/
section(2)

result(my3FavoriteTVShows.length === 3)

/*
  03 - Após a constante abaixo, armazene em uma constante "isRandomTVShowIncluded" um boolean que indica se a série que a
       "randomTVShow" armazena é uma das suas 3 séries favoritas;
     - Utilize o método adequado para fazer essa verificação;
     - Exiba no console o boolean que a "isRandomTVShowIncluded" recebeu.
*/
section(3)

const randomTVShow = 'Watchmen'
const isRandomTVShowIncluded = my3FavoriteTVShows.includes(randomTVShow)

result(isRandomTVShowIncluded)

/*
  04 - Armazene a frase abaixo em uma constante "typeSentence", substituindo "TIPO_DE_DADO" pela informação correta;
     - Utilize o operador adequado para gerar essa informação;
     - Exiba a "typeSentence" no console.
    
     "O tipo de dado que a const "isRandomTVShowIncluded" armazena é: TIPO_DE_DADO."
*/
section(4)

const typeSentence = `O tipo de dado que a const "isRandomTVShowIncluded" armazena é: ${typeof isRandomTVShowIncluded}.`

result(typeSentence)
/*
  05 - Exiba a frase abaixo no console, substituindo "NÚMERO_DE_CARACTERES" por 39 e "BOOLEAN" pela informação correta (true ou false);
     - Converta explicitamente este boolean em uma string ao inserí-lo na frase;
     - A 1ª letra do boolean deve ser maiúscula;
     - Dica: se você perceber que está repetindo o mesmo número na string, cogite armazenar este número em uma constante e usá-la na frase.

     "A string que a "typeSentence" armazena tem mais de NÚMERO_DE_CARACTERES caracteres? BOOLEAN."
*/
section(5)

const numberOfChars = 39
const booleanExpressionResult = Boolean(typeSentence.length > numberOfChars).toString().replace('f', 'F')
const message = `A string que a "typeSentence" armazena tem mais de ${numberOfChars} caracteres? ${booleanExpressionResult}.`
// const message = `A string que a "typeSentence" armazena tem mais de ${numberOfChars} caracteres? ${String(Boolean(typeSentence.length === numberOfChars)).replace('f', 'F')}.`
result(message)
/*
  06 - Após a constante "falsyValues", exiba no console a frase abaixo, substituindo "NÚMERO_DE_ITENS" e "BOOLEAN" pelas informações corretas.
  "Todos os NÚMERO_DE_ITENS itens do array "falsyValues" são falsy. Inclusive o BOOLEAN."
*/
section(6)

const falsyValues = [0, "", false, '', ``, null, undefined, NaN]

const phrase = `Todos os ${falsyValues.length} itens do array "falsyValues" são falsy. Inclusive o ${falsyValues[2]}.`

result(phrase)

/*
  07 - Armazene em uma constante "crazyOperation" a soma entre null e 1;
     - Armazene em uma constante "crazyConversion" a conversão da "crazyOperation" em boolean.
     - Você sabe por que essa conversão resultou em true?
*/
section(7)

const crazyOperation = null + 1
const crazyConversion = Boolean(crazyOperation)

result(crazyConversion+ ' \n msg: 1 it\'s a truthy value')

/*
  08 - Armazene em uma constante "ages" um array com os números 31, 82, 61 e 11;
     - Armazene em uma constante "agesSum" a soma entre 1º e 3º itens do array "ages";
     - Exiba a frase abaixo no console, substituindo "BOOLEAN" pela informação correta.

     "A soma entre o 1º e o 3º item de "ages" é menor ou igual a 92. Essa afirmação é: BOOLEAN."
*/
section(8)

const age = [31, 82, 61, 11]
const agesSum = age[0] + age[2]

const finalMSG = `A soma entre o 1º e o 3º item de "ages" é menor ou igual a 92. Essa afirmação é: ${Boolean(agesSum <= 92)}.`
result(finalMSG)

/*
  09 - Armazene em uma const "isNotAString" uma expressão que verifica se o tipo de dado que a "randomTVShow" armazena não é uma string;
     - Essa expressão deve resultar em false.
     - Exiba a "isNotAString" no console.
*/
section(9)

const isNotAString = typeof randomTVShow !== typeof ''

result(isNotAString)

/*
  10 - Abaixo da constante "evenNumbers", exiba no console um boolean que indica se o número 8 existe no array;
     - Não utilize o método includes desta vez.
*/
section(10)

const evenNumbers = [0, 2, 4, 6, 8, 10]
const verifyExistenceOf8  = evenNumbers.indexOf(8) !== -1
// const verifyExistenceOf8  = Boolean(evenNumbers[evenNumbers.lastIndexOf(8)])

result(verifyExistenceOf8)