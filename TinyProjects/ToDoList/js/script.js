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