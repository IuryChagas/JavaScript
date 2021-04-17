const todosContainer = document.querySelector('.todos-container')
const formAddTodo = document.querySelector('.form-add-todo')
const inputSearchTodo = document.querySelector('.form-search input')

const addTodo = inputValue => {
  if (inputValue.length) {
    todosContainer.innerHTML += `
    <li class="list-group-item d-flex justify-content-between align-items-center" data-todo="${inputValue}">
      <span>${inputValue}</span>
      <i class="far fa-trash-alt" data-trash="${inputValue}"></i>
    </li>
    `
    event.target.reset()
  }
}

formAddTodo.addEventListener('submit', event => {
  event.preventDefault()

  const inputValue = event.target.add.value.trim()

  addTodo(inputValue)
})

const removeTask = clickedElement => {
  const trashDataValue = clickedElement.target.dataset.trash
  const todo = document.querySelector(`[data-todo="${trashDataValue}"]`)

  if (trashDataValue) {
    todo.remove()
  }
}

const filterTasks = (tasks, inputValue, returnMatchedTasks) => tasks
  .filter(task => {
    const matchedTasks = task.textContent.toLowerCase().includes(inputValue)
    return returnMatchedTasks ? matchedTasks : !matchedTasks
  })

const manipulateClasses = (tasks, classToAdd, classToRemove) => {
  tasks.forEach(tasks => {
    tasks.classList.remove(classToRemove)
    tasks.classList.add(classToAdd)
  })
}

const hideTasks = (inputValue, tasks) => {
  const tasksToHide = filterTasks(tasks, inputValue, false)
  manipulateClasses(tasksToHide, 'hidden', 'd-flex')
}

const showTasks = (inputValue, tasks) => {
  const tasksToShow = filterTasks(tasks, inputValue, true)
  manipulateClasses(tasksToShow, 'd-flex', 'hidden')
}

const filterByCharacter = event => {
  const inputValue = event.target.value.trim().toLowerCase()
  const tasks = Array.from(todosContainer.children)
    
  hideTasks(inputValue, tasks)
  showTasks(inputValue, tasks)
}

todosContainer.addEventListener('click', removeTask)
inputSearchTodo.addEventListener('input', filterByCharacter)
