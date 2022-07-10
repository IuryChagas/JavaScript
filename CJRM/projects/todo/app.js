const form = document.querySelector('.form-add-todo')
const ul = document.querySelector('.todos-container')

const createLabelAndWithAttributes = item => {

    const li = document.createElement('li')
    const span = document.createElement('span')
    const i = document.createElement('i')

    span.textContent = item
    
    li.setAttribute('class', 'list-group-item d-flex justify-content-between align-items-center')
    i.setAttribute('class', 'far fa-trash-alt delete')
    
    li.insertAdjacentElement('afterbegin', span)
    li.insertAdjacentElement('beforeend', i)
    ul.insertAdjacentElement('afterbegin', li)
}

const createItem = event => {
    event.preventDefault()
    const item = event.target.add.value
    createLabelAndWithAttributes(item)
}

form.addEventListener('submit', createItem)
