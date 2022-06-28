console.info(
    `
    \n:::::   EXERCISES CHAPTER 18   :::::
    `
)

/*
Este exercício será um pouquinho diferente dos anteriores.

Seu desafio é desenvolver uma versão do quiz que:

- Aborda um tema diferente (não pode ser de filmes);
- Tem um tema de cores diferente do que foi apresentado na aula;
- Exibe na tela a pontuação que o usuário fez. Não há certo ou errado, apenas faça. Essa exibição de pontos é uma das implementações que faremos na próxima aula =D

Independente se você já fez o quiz dos filmes enquanto acompanhava a aula, busque fazer esse exercício sem rever partes da aula.

É importante que a sua versão do quiz seja feita apenas com o conteúdo que vimos até aqui.
*/

const form = document.querySelector('.quiz-form')
const finalScoreContainer = document.querySelector('.final-score-container')
const scoreLabel = finalScoreContainer.querySelector("span")

const correctAnswers = ['A', 'B', 'A', 'B', 'A', 'A']

const userAnswers = [
    form.inputQuestion1.value,
    form.inputQuestion2.value,
    form.inputQuestion3.value,
    form.inputQuestion4.value,
    form.inputQuestion5.value,
    form.inputQuestion6.value,
]

let score = 0

const showScoreBoard = score => {
    finalScoreContainer.classList.remove('d-none')
    scrollTo(0, 0)

    let counter = 0

    const timer = setInterval( ()=> {
        
        if (counter === score) { clearInterval(timer) }

        scoreLabel.textContent = `${counter}%`
        counter++
    }, 10)
}

const handleScoreValue = event => {
    event.preventDefault()

    userAnswers.forEach( (answer, index) => {
        if (answer === correctAnswers[index]) {
            score += 16.66
        }
    })

    if(score > 99){ score = 100 }

    showScoreBoard(score)
}

form.addEventListener('submit', handleScoreValue)
