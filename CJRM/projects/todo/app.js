const todosContainer = document.querySelector('.todos-container')
const formAddTodo = document.querySelector('.form-add-todo')
const removeTodo = document.querySelectorAll('.delete')
const inputSearchTodo = document.querySelector('.form-search')
const addTodoTask = (event) => {
    const inputValue = event.target.add.value.trim()
    const todoTaskTemplate = `
    <li class="list-group-item d-flex justify-content-between align-items-center" data-todo="${inputValue}">
     <span>${inputValue}</span>
     <i class="far fa-trash-alt" data-trash="${inputValue}"></i>
    </li>
    `

    if (inputValue) {
        todosContainer.innerHTML += todoTaskTemplate 
        event.target.reset()
    }
}

const removeTodoTask = clickedElement => {
    const trashDataValue = clickedElement.dataset.trash
    const getTodoTask = document.querySelector(`[data-todo="${trashDataValue}"]`)

    if(trashDataValue){
        getTodoTask.remove()
    }
}

formAddTodo.addEventListener('submit', event => {
    event.preventDefault()
    addTodoTask(event)
})

todosContainer.addEventListener('click', event => {
    const clickedElement = event.target
    removeTodoTask(clickedElement)
})

inputSearchTodo.addEventListener('input', event => {
    const inputValue = event.target.value.trim().toLowerCase()

    Array.from(todosContainer.children)
        .filter( task => !task.textContent.toLowerCase().includes(inputValue))
        .forEach( task => {
            task.classList.remove('d-flex')
            task.classList.add('hidden')
        })
    Array.from(todosContainer.children)
        .filter( task => task.textContent.toLowerCase().includes(inputValue))
        .forEach( task => {
            task.classList.remove('hidden')
            task.classList.add('d-flex')
        })
})
