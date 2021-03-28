const correctAnswers = ['B','B','B','B']

const form = document.querySelector('.quiz-form')


form.addEventListener('submit', event =>{
    event.preventDefault()

    let score = 0
    const userAnswers = [
        form.inputQuestion1.value,
        form.inputQuestion2.value,
        form.inputQuestion3.value,
        form.inputQuestion4.value
    ]
    console.log(userAnswers)
    
    userAnswers.forEach( (userAnswer, index) => {
        if (userAnswer === correctAnswers[index]) {
            score += 25
        }
    })
    console.log(score)
})
