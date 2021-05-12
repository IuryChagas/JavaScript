/*
01 - No index.html deste diretório (exercicio-03):

- Declare uma marcação HTML básica;
- Linke este arquivo, app.js;
- Inicie o seu servidor local e abra o console do browser.
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
02 - Armazene um array vazio em uma let "brazilianFoods";
*/
console.info("## Exercise >> 02")

let brazilianFoods = []

console.log(brazilianFoods)

/*
03 - Use o método adequado para adicionar os 3 seguintes itens ao array:

- Coxinha
- null
- Brigadeiro

- Exiba a brazilianFoods no console.
*/
console.info("## Exercise >> 03")

brazilianFoods.push('Coxinha', null, 'Brigadeiro')

console.table(brazilianFoods)

/*
04 - Comente o console.log acima e:

- Através de uma reatribuição de valor, faça com que o 2º item do  
array "brazilianFoods" (null) seja substituído por "Pão de Queijo";
- Exiba apenas o 2º item desse array no console.
*/
console.info("## Exercise >> 04")

brazilianFoods[1] = 'Pão de Queijo'

console.table(brazilianFoods)

/*
05 - Comente o console.log acima e:

- Armazene em uma const "foodsInfo" a seguinte string: "Até aqui, o  
array "brazilianFoods" possui NUMERO_DE_ITENS itens: NOME_DO_ITEM_1,  
NOME_DO_ITEM_2 e NOME_DO_ITEM_3.";
- Substitua "NUMERO_DE_ITENS" pelo valor correto, mas sem inserir o  
número diretamente;
- Substitua as palavras "NOME_DO_ITEM_X" pelas informações corretas,  
mas sem digitar os nomes das comidas diretamente;
- Exiba a foodsInfo no console.
*/
console.info("## Exercise >> 05")

const foodsInfo = `Até aqui, o array \"brazilianFoods\" possui ${brazilianFoods.length} itens: ${brazilianFoods[0]}, ${brazilianFoods[1]} e ${brazilianFoods[2]}.`

console.log(foodsInfo)
/*
06 - Comente o console.log acima e:

- Armazene um array com os itens "Chico" e "Zeca" em uma const  
"maleDogNames";
- Agora, em uma const "femaleDogNames", armazene um array com os  
itens "Lilica" e "Matilda";
- Declare uma let "dogNames" que recebe a junção dos arrays  
"maleDogNames" e "femaleDogNames";
- Exiba a "dogNames" no console.
*/
console.info("## Exercise >> 06")

const maleDogNames = ['Chico', 'Zeca']
const femaleDogNames = ['Lilica', 'Matilda']
let dogNames = maleDogNames.concat(femaleDogNames)

console.table(dogNames)

/*
07 - Comente o console.log acima e:

- Exiba no console uma string com todos os itens do array  
"dogNames" separados por vírgula e espaço em branco;
- Utilize o método adequado para fazer isso;
- O resultado deve ser: "nome1, nome2, nome3, nome4".
*/
console.info("## Exercise >> 07")

console.log(dogNames.join(', '))
/*
08 - Comente o console.log acima e:

- Exiba no console o último item do array "dogNames", mas de  
forma que caso a quantidade de itens do array aumente ou diminua,  
o último item continue sendo exibido;
- Para testar essa lógica, na linha acima do console.log que  
você acabou de escrever, remova o último item do array "dogNames"  
utilizando o método adequado para isso;
- O console deve continuar exibindo o último item do array, que  
agora é "Lilica".
*/
console.info("## Exercise >> 08")

dogNames.pop()

console.log(dogNames[dogNames.length -1])

/*
09 - Comente o console.log acima e:

- Adicione o item "Nina" no final do array "dogNames", utilizando  
o método adequado para isso;
- Agora, armazene em uma const "initials" uma template string com  
apenas as letras iniciais dos nomes do array "dogNames";
- Exemplo: ['Nala', 'Zé'] resultaria em uma string 'NZ';
- Não digite as letras diretamente;
- Exiba a "initials" no console.
*/
console.info("## Exercise >> 09")

dogNames.push('Nina')

console.log(dogNames)

const initials = `${dogNames[0].slice(0,1)}${dogNames[1].slice(0,1)}${dogNames[2].slice(0,1)}${dogNames[3].slice(0,1)}`
const initials0 = `${dogNames[0][0]}${dogNames[1][0]}${dogNames[2][0]}${dogNames[3][0]}`

console.log('arr[]str[]:', initials0)
console.log('.slice(): ', initials)

/*
10 - Comente o console.log acima e:

- Exiba a "initials" no console, mas com todas as letras minúsculas;
- Utilize o método adequado para isso.
*/
console.info("## Exercise >> 10")

console.log(initials.toLowerCase())

/*
11 - Comente o console.log acima e:

- Declare uma const "dessert" e faça com que ela receba uma template  
string que contém a parte "co" do 1º item do array "dogNames", a  
parte "ca" do 2º item e a parte "na" do 4º item;
- A string deve resultar na palavra 'cocana', que não deve ser  
digitada diretamente;
- No final da string, faça com que a letra "n" seja substituída por  
"d", utilizando o método adequado para isso;
- Exiba no console a string abaixo, substituindo "SOBREMESA" pela  
constante que você criou.

'A SOBREMESA é um doce à base de coco, tradicional na América Latina e em Angola.'
*/
console.info("## Exercise >> 11")

const dessert = `${dogNames[0].slice(3)}${dogNames[1].slice(2)}${dogNames[3].slice(2)}`.replace('n', 'd')

console.log(`'A ${dessert} é um doce à base de coco, tradicional na América Latina e em Angola.'`)

/*
12 - Comente o console.log acima e:

- Declare um array com os números 3, 5, e 7 e o armazene em uma let  
"oddNumbers";
- Exiba no console o resultado do 2º item do array elevado ao cubo. O  
valor exibido deve ser 125;
- Entre a declaração da "oddNumbers" e a exibição do 2º item do array  
elevado ao cubo, faça o 2º item do array receber todo o valor que ele  
já tem, mais 4;
- Agora, o resultado exibido no console deve ser 729.
*/
console.info("## Exercise >> 12")

let oddNumbers = [3, 5, 7]

console.log(oddNumbers[1] ** 3)

oddNumbers[1] += 4

console.log(oddNumbers[1] ** 3)