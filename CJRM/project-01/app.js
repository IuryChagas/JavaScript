const form = document.querySelector('form')
const scoreboard = document.querySelector('.final-score-container')
const finalResult = document.querySelector('.display-4')
const correctAnswers = ['A', 'B', 'A', 'B', 'A', 'A']
let score = null

const getUserAnswers = () => {
    const userchoices = [
        form.inputQuestion1,
        form.inputQuestion2,
        form.inputQuestion3,
        form.inputQuestion4,
        form.inputQuestion5,
        form.inputQuestion6
    ]
    return userchoices
}

const calculateUserScore = userAnswers => {
    correctAnswers.forEach((answer, index) => {
        if (answer === userAnswers[index].value) {
            score += 100 / correctAnswers.length
        }
    })
}

const showScoreBoard = () => {
    scoreboard.classList.remove('d-none')
}

const animatePageScroll = () => {
    scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
    })
}

const animateFinalResult = () => {
    let counter = 0
    
    const timer = setInterval(()=>{

        if (counter === Math.trunc(score)) {
            clearInterval(timer)
        }

        finalResult.textContent = `${counter++}%`
    }, 10)

}

form.addEventListener('submit', event => {
    event.preventDefault()

    const userAnswers = getUserAnswers()

    calculateUserScore(userAnswers)

    showScoreBoard()

    animatePageScroll()

    animateFinalResult()
})