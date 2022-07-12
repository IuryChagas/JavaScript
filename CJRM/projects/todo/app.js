const todosContainer = document.querySelector('.todos-container')
const formAddTodo = document.querySelector('.form-add-todo')
const removeTodo = document.querySelectorAll('.delete')

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

formAddTodo.addEventListener('submit', event => {
    event.preventDefault()
    addTodoTask(event)
})

const removeTodoTask = clickedElement => {
    const trashDataValue = clickedElement.dataset.trash
    const getTodoTask = document.querySelector(`[data-todo="${trashDataValue}"]`)

    if(trashDataValue){
        getTodoTask.remove()
    }
}

todosContainer.addEventListener('click', event => {
    const clickedElement = event.target
    removeTodoTask(clickedElement)
})
