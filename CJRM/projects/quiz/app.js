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

const cssClasses = ['btn-close', 'modal']
let score = 0
let timer = 0

const closeModal = event => {
    if(cssClasses.includes(event.target.classList[0])){   
        modalContainer.classList.add('d-none')
    }
}

form.addEventListener('submit', event => {
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
            modalContainer.classList.remove('d-none')
            return
        }
    }
})

modalContainer.addEventListener('click', closeModal)
btnCloseModal.addEventListener('click', closeModal)
