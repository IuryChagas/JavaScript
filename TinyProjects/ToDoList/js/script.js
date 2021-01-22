class Todo {
    constructor(){
        this.totalTasks = document.querySelectorAll('.task').length
    }
    addTask(taskText){

        let template = document.querySelector('.task').cloneNode(true);

        template.classList.remove('hide')

        let templateText = template.querySelector('.task-title')

        templateText.textContent = taskText;

        let tasksList = document.querySelector('#tasks-container')

        tasksList.appendChild(template)

        this.addEvents();
    }
    removeTask(task){

        let parentElement = task.parentElement;
        parentElement.remove()

    }
    completeTask(){

    }
    addEvents(){

        let removeBtns = document.querySelectorAll('.fa-trash')

        let removeBtn = removeBtns[removeBtns.length -1];

        let doneBtns = document.querySelectorAll('.fa-check')
        let doneBtn = doneBtns[doneBtns.length -1];

        removeBtn.addEventListener('click', function () {
            todo.removeTask(this)
        })

        doneBtn.addEventListener('click', function () {
            todo.completeTask(this)
        })
    }
}

let todo = new Todo()

let addBtn = document.querySelector('#add')

addBtn.addEventListener('click', function(event){

    event.preventDefault();

    let taskText = document.querySelector('#task')

    if (taskText.value.trim()) {
        todo.addTask(taskText.value)
    }

    taskText.value = '';  

})