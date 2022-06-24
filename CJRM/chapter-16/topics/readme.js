const form = document.querySelector('form')
const usernameInput = document.querySelector('#username')

console.log(form)

form.addEventListener('submit', event => {
    event.preventDefault()

    // / ^[a-zA-Z0-9]{6,10}$ = de (a) à (z) maiusculo ou minusculo e 0 à 9 entre 6 e 10 digitos
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions

    console.log(usernameInput.value)
    console.log(form.username)
    console.log(form.username.value)
    console.log(event.target.username.value)

})

const username = 'iurymd9'

const pattern = /^[a-z]{6,}$/
const isAMatch = pattern.test(username)

console.log(isAMatch)

if (isAMatch) {
    console.log(`status code: ${true}`)
} else {
    console.log(`status code: ${false}`)
}

const result = username.search(pattern)

if (result === 0) {
    console.log(`status code: ${true}`)
} else if (result === -1) {
    console.log(`status code: ${false}`)
}
