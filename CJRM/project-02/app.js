const formAddTask = document.querySelector('.form-add-todo')
const tasksContainer = document.querySelector('.todos-container')
const inputSearchTask = document.querySelector('.form-search input')

const addTask = (thisEvent, inputValue) => {
 
    if (inputValue.length) {

        tasksContainer.innerHTML += `
        <li class="list-group-item d-flex justify-content-between align-items-center" data-todo="${inputValue}">
        <i class="fas fa-check-double" data-done="${inputValue}"></i>
        <span>${inputValue}</span>
        <i class="far fa-trash-alt" data-trash="${inputValue}"></i>
        </li>
        `
        thisEvent.target.reset()
    }

}
const completeTask = clickedElement => {

    const done = clickedElement.dataset.done
    const task = document.querySelector(`[data-todo="${done}"]`)

    if (done) {
        task.classList.toggle('done')
    }

}

const removeTask = clickedElement => {

    const trashDataValue = clickedElement.dataset.trash
    const task = document.querySelector(`[data-todo="${trashDataValue}"]`)

    if(trashDataValue){
        task.remove()
    }

}

const filterTasks = (allTasks, inputValue, returnMatchedTasks) => allTasks
    .filter( li => {
                const matchedTasks = li.textContent.toLowerCase().trim().includes(inputValue)
                return returnMatchedTasks ? matchedTasks : !matchedTasks
            }
    )

const manipulateClasses = (tasks, classToAdd, classToRemove) => {

    tasks.forEach( li => (
        li.classList.remove(classToRemove),
        li.classList.add(classToAdd)
    ))

}

const hideTasks = (allTasks, inputValue) => {

  const tasksToHide =  filterTasks(allTasks, inputValue, false)
    manipulateClasses(tasksToHide, 'hidden', 'd-flex')

}

const showTasks = (allTasks, inputValue) => {

    const tasksToShow = filterTasks(allTasks, inputValue, true)
    manipulateClasses(tasksToShow, 'd-flex', 'hidden')

}

formAddTask.addEventListener('submit', event => {
    event.preventDefault()

    const inputValue = event.target.add.value.trim()
    addTask(event, inputValue)

})

tasksContainer.addEventListener('click', event => {

    const clickedElement = event.target

    completeTask(clickedElement)
    removeTask(clickedElement)

})

inputSearchTask.addEventListener('input', event => {
    event.preventDefault()

    const allTasks = Array.from(tasksContainer.children)
    const inputValue = event.target.value.trim().toLowerCase()

    hideTasks(allTasks, inputValue)
    showTasks(allTasks, inputValue)

})
