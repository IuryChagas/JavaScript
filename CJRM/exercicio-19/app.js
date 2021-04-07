/*
Este exercício será um pouquinho diferente dos anteriores.

Seu desafio é desenvolver uma versão do quiz que:

- Aborda um tema diferente (não pode ser de filmes);
- Tem um tema de cores diferente do que foi apresentado na aula;
- Exibe na tela a pontuação que o usuário fez. Não há certo ou errado, apenas faça. Essa exibição de pontos é uma das implementações que faremos na próxima aula =D

Independente se você já fez o quiz dos filmes enquanto acompanhava a aula, tente fazer esse exercício sem rever partes da aula.

É importante que a sua versão do quiz seja feita apenas com o conteúdo que vimos até aqui.

Depois de fazer o que foi pedido acima, crie um repositório no GitHub para a sua aplicação e abra uma issue no repositório do curso com:

- O link da sua versão do quiz;
- Quais foram as suas maiores dúvidas ou dificuldades durante a execução desse exercício;
- Quais foram as suas menores dificuldades durante a execução desse exercício.

Link do repositório do curso: https://github.com/roger-melo-treinamentos/curso-de-js-roger-melo/issues

Ps: se você não conseguiu fazer tudo o que foi pedido acima, abra a issue mesmo assim =)
*/

const form = document.querySelector('.quiz-form')
const input = document.querySelector('input')
const finalScoreContainer = document.querySelector('.final-score-container')

const recommendedLanguages = ['A','B', 'A', 'B', 'A', 'A']
let score = 0

const getUserAnswers = () => recommendedLanguages.map((_, index) => 
        form[`inputQuestion${index +1}`].value)

const calculateUserScore = userChoices => {
    userChoices.forEach( (response, index) => {
        const isUserChoiceCorrect = response === recommendedLanguages[index]

        if (isUserChoiceCorrect) {
            score += 16
        }
    })
}
const showFinalScore = () =>{
    scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
    })

    finalScoreContainer.querySelector('span').textContent = `${score}%`
    finalScoreContainer.classList.remove('d-none')
}
const animateFinalScore = () =>{
    let counter = 0
    let finalScore = ``
    const timer = setInterval(() => {

        if (counter === score) {
            clearInterval(timer)
        }

        if (counter !== 96) {
            finalScore = `${counter}.66%`
        }else if (counter === 96){
            finalScore = `${counter += 4}%`
        }

        finalScoreContainer.querySelector('span').textContent = `${finalScore}`
        counter++
    }, 10)
}

form.addEventListener('submit', event => {
    event.preventDefault()

    const userChoices = getUserAnswers()

    calculateUserScore(userChoices)
    showFinalScore()
    animateFinalScore()
})
