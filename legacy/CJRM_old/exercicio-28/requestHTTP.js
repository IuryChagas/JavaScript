// https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/readyState
// https://jsonplaceholder.typicode.com/

const request = new XMLHttpRequest()

request.addEventListener('readystatechange', event => {
//    console.log(request.readyState)
    if (request.readyState === 4 && request.status === 200) {
        console.log('Status: ', request.status)
        console.log(request.responseText)
    }
})

request.open('GET', 'https://jsonplaceholder.typicode.com/todos')
request.send()

// console.log(request)