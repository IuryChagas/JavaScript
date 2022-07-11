const todosContainer = document.querySelector('.todos-container')
const formAddTodo = document.querySelector('.form-add-todo')
const removeTodo = document.querySelectorAll('.delete')

formAddTodo.addEventListener('submit', event => {
    event.preventDefault()
    const inputValue = event.target.add.value.trim()

    if (inputValue) {
        todosContainer.innerHTML += `
        <li class="list-group-item d-flex justify-content-between align-items-center">
         <span>${inputValue}</span>
         <i class="far fa-trash-alt delete"></i>
        </li>
        `
        event.target.reset()
    }
})

todosContainer.addEventListener('click', event => {
    const clickedElement = event.target
    const convertDomTokenListInArray = Array.from(clickedElement.classList)
    const hasCssClassDelete = convertDomTokenListInArray.includes('delete')
    const removeTask = clickedElement.parentElement.remove()

    if(hasCssClassDelete) { removeTask }
})
