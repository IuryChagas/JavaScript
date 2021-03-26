const form = document.querySelector('.signup-form')
const feedback = document.querySelector('.feedback')
const input = document.querySelector('input')

const testUsername = username => {
   return /^[a-zA-Z]{6,12}$/.test(username)
}

form.addEventListener('submit', event => {
    event.preventDefault()


    const userName = event.target.username.value
    const isAValidUserName = testUsername(userName)

    if (isAValidUserName) {
        feedback.textContent = 'UserName válido! :)'
        return
    }
    feedback.textContent = 'UserName deve conter entre 6 e 12 caracteres e apenas letras'
    console.error('Usuário inválido!')

})

form.username.addEventListener('keyup', event => {
    const isAValidUserName = testUsername(event.target.value)

    if (isAValidUserName) {

        console.log(input.setAttribute('class','success'))
        return
    }

    console.log(input.setAttribute('class','error'))
    
})