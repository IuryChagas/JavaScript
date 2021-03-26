const form = document.querySelector('.signup-form')
const userNameInput = document.querySelector('#username')

form.addEventListener('submit', event => {
    event.preventDefault()

    // 3 formas de capturar os dados do submit do form
    console.log(form.username.value)
    console.log(userNameInput.value)
    console.log(event.target.username.value)
})

const userName = 'iuryChagas'
const pattern = /^[a-zA-Z0-9]{6,}$/


if (pattern) {
    console.log("o teste da regex passou ^^ ")
}else{
    console.log("o teste da regex NÃO passou '~' ")
}
console.log(pattern.test(userName))

const result = userName.search(pattern)

// retorna a posição da string onde o padrão da expressão regular foi identificado!
console.log(result)