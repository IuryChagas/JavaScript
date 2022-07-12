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

const filterTodoTasks = (todoTasks, inputValue, returnMatchedTasks) => todoTasks
    .filter( task => {
        const matchedTasks = task.textContent.toLowerCase().includes(inputValue)
        const unMatchedTasks = !matchedTasks
        return returnMatchedTasks ? matchedTasks : unMatchedTasks
    })

const manipulateClasses = (todoList, classToAdd, classToRemove) => {
    todoList.forEach( task => {
        task.classList.remove(classToRemove)
        task.classList.add(classToAdd)
    })
}

const hideTodoTasks = (todoTasks, inputValue) => {
    const hideTasks = filterTodoTasks(todoTasks, inputValue, false)
    manipulateClasses(hideTasks, 'hidden', 'd-flex')
}

const showTodoTasks = (todoTasks, inputValue) => {
    const showTasks = filterTodoTasks(todoTasks, inputValue, true)
    manipulateClasses(showTasks, 'd-flex', 'hidden')
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
    const todoTasks = Array.from(todosContainer.children)

    hideTodoTasks(todoTasks, inputValue)
    showTodoTasks(todoTasks, inputValue)
})
