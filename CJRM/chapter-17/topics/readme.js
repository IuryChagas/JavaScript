const regex = /^[a-zA-Z]{6,12}$/

const form = document.querySelector('form')
const feedback = document.querySelector('.feedback')

const testUsername = username => regex.test(username)

form.addEventListener('submit', event => {
    event.preventDefault()

    const username = event.target.username.value
    console.log(username)

    if(testUsername(username)){
        feedback.textContent = 'username válido =)'
        return
    }
    feedback.textContent = 'O username deve conter entre 6 a 12 caracteres e apenas letras'
})

// https://developer.mozilla.org/en-US/docs/Learn/Forms/Form_validation

form.username.addEventListener('keyup', event => {
    const isAValidUsername = testUsername(event.target.value)
    console.log(isAValidUsername)
    if(isAValidUsername) {
        form.setAttribute('class', 'success')
        // form.style.backgroundColor = `#00ff2685`
        // form.style.border = `solid 2px green`
        feedback.textContent = 'username válido =)'
        return
    }
    form.setAttribute('class', 'error')
    feedback.textContent = 'O username deve conter entre 6 a 12 caracteres e apenas letras'
})