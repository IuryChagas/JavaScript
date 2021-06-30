const form = document.querySelector('form')
const scoreboard = document.querySelector('.final-score-container')
const finalResult = scoreboard.querySelector('span')
const correctAnswers = ['A', 'B', 'A', 'B', 'A', 'A']
let score = null

const getUserAnswers = () => {
    return correctAnswers.map( (__, index) => {
        return form[`inputQuestion${index +1}`].value
    } )
}

const calculateUserScore = userAnswers => {

    userAnswers.forEach((userAnswer, index) => {
        const isUserChoiceCorrect = userAnswer === correctAnswers[index]

        if (isUserChoiceCorrect) {
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

const resetUserScore = () => {
    return score = 0
}

form.addEventListener('submit', event => {
    event.preventDefault()

    const userAnswers = getUserAnswers()

    resetUserScore()

    calculateUserScore(userAnswers)

    showScoreBoard()

    animatePageScroll()

    animateFinalResult()

})