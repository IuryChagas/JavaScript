const addTask = document.querySelector('.form-add-todo')
const containerTasks = document.querySelector('.todos-container')
const inputSearch = document.querySelector('.form-search input')

addTask.addEventListener('submit', event => {
    event.preventDefault()

    const inputValidationClear = event.target.add.value.trim()
    const inputFormatValidation = inputValidationClear.toLowerCase()
    const isValidInput = inputFormatValidation.length
    if (isValidInput) {

        console.log(inputFormatValidation)
        const templateTask = `
        <li class="list-group-item d-flex justify-content-between align-items-center">
        <i class="far fa-check-square"></i>
        <span>${inputValidationClear}</span>
        <i class="far fa-trash-alt delete"></i>
        </li>
        `
        containerTasks.innerHTML += templateTask
        event.target.reset()
    }
})

containerTasks.addEventListener('click', event => {
    const clickedElement = event.target.classList
    const identifyTrashIcon = Array.from(clickedElement).includes('delete')
    const identifyParentElement = event.target.closest('li')

    if (identifyTrashIcon && identifyParentElement) {
        identifyParentElement.remove()
        console.log('remoção realizada com sucesso!')
    }

})

inputSearch.addEventListener('input', event => {
    event.preventDefault()

    const inputValidationClear = event.target.value.trim()
    const inputFormatValidation = inputValidationClear.toLowerCase()
    const ulChildren = Array.from(containerTasks.children)

    ulChildren.filter( li => {
        return !li.textContent.toLowerCase().trim().includes(inputFormatValidation)
    }).forEach( li => {
        li.classList.remove('d-flex')
        li.classList.add('hidden')
        return
    })

    ulChildren.filter( li => {
        return li.textContent.toLocaleLowerCase().trim().includes(inputFormatValidation)
    }).forEach( li => {
        li.classList.remove('hidden')
        li.classList.add('d-flex')
        return
    })

})
