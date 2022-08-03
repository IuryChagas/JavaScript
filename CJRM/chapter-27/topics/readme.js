console.info(`\n:::::::::::::: Requests HTTP ::::::::::::::\n`)

const request = new XMLHttpRequest()

console.log(request)

request.addEventListener('readystatechange', () => {
    const readyStateChangeStatus = request.readyState

    if(readyStateChangeStatus === 0) { console.log({status: readyStateChangeStatus, state: 'UNSENT', description: 'Client has been created. open() not called yet.'}) }
    if(readyStateChangeStatus === 1) { console.log({status: readyStateChangeStatus, state: 'OPENED', description: 'open() has been called.'}) }
    if(readyStateChangeStatus === 2) { console.log({status: readyStateChangeStatus, state: 'HEADERS_RECEIVED', description: 'send() has been called, and headers and status are available.'}) }
    if(readyStateChangeStatus === 3) { console.log({status: readyStateChangeStatus, state: 'LOADING', description: 'Downloading; responseText holds partial data.'}) }
    if(readyStateChangeStatus === 4) { console.log({status: readyStateChangeStatus, state: 'DONE', description: 'The operation is complete.'}) }

    if(readyStateChangeStatus === 4 && request.status === 200) console.log(request.responseText)
})
request.open('GET', 'https://jsonplaceholder.typicode.com/todos')
// request.setRequestHeader()
request.send()

console.log()