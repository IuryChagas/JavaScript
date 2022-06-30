const form = document.querySelector('.quiz-form')
const scoreContainer = document.querySelector('.final-score-container')
const finalResult = document.querySelector(".final-score-container > div > p > span")
const modalContainer = document.querySelector('.modal')
const btnCloseModal = document.querySelector('.btn-close')

const correctAnswers = [
    { inputQuestion: 'A', value: 16 },
    { inputQuestion: 'B', value: 18 },
    { inputQuestion: 'A', value: 19 },
    { inputQuestion: 'B', value: 16 },
    { inputQuestion: 'A', value: 16 },
    { inputQuestion: 'A', value: 15 },
]

let score = 0

const removableClasses = ['btn-close', 'modal']

const showScoreBoard = score => {

    scroll(0, 0)

    let counter = 0

    const timer = setInterval(()=>{
        if (counter === score) {
            clearInterval(timer)
        }
        finalResult.textContent = `${counter}%`
        counter++
    },5)

    scoreContainer.classList.remove('d-none')
}

const closeModal = event => {
    if(removableClasses.includes(event.target.classList[0])){
        modalContainer.classList.add('d-none')
    }
}

modalContainer.addEventListener('click', closeModal)
btnCloseModal.addEventListener('click', closeModal)

const handleScoreboard = event => {
    event.preventDefault()

    const userAnswers = [
        form.inputQuestion1.value,
        form.inputQuestion2.value,
        form.inputQuestion3.value,
        form.inputQuestion4.value,
        form.inputQuestion5.value,
        form.inputQuestion6.value,
    ]

    for (let i = 0; i < userAnswers.length; i++) {
        const answer = userAnswers[i]

        if(answer === ''){
            scoreContainer.classList.add('d-none')
            score = 0
            modalContainer.classList.remove('d-none')
            return
        }

        if (answer === correctAnswers[i].inputQuestion) {
            score += correctAnswers[i].value
            if (score > 100) {
                score = 0
                return
            }
        }
        showScoreBoard(score)
    }
}

form.addEventListener('submit', handleScoreboard)

