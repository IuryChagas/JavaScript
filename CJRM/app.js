let button = document.querySelector('button')
let popup = document.querySelector('.popup-wrapper')

button.addEventListener('click', event => {
    popup.style.display = 'block'
    event.stopPropagation
})

popup.addEventListener('click', event => {
    const classNameOfClickedElement = event.target.classList[0]

    const targetItemsToClosePopUp = ['popup-close', 'popup-wrapper', 'popup-link']

    const shouldClosePopup = targetItemsToClosePopUp.some(className => 
        className === classNameOfClickedElement
    )

    // const shouldClosePopup = targetItemsToClosePopUp.forEach(classToClose => {
    //     if (classToClose === classNameOfClickedElement) {
    //         popup.style.display = 'none'
    //     }
    // })

    if (shouldClosePopup) {
        popup.style.display = 'none'
    }
})