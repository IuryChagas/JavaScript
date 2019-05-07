Number.prototype.entre = function (start, end) {
    return this >= start && this <= end
}

const printResult = function (note) {
    if(note.entre(9, 10)){
        console.log("Honor Board!")
    } else if(note.entre(7, 8.99)){
        console.log("Approved!")
    } else if(note.entre(4, 6.99)){
        console.log("Recuperation!")
    } else if(note.entre(0, 3.99)){
        console.log("Reproved!")
    } else{
        console.log("invalid parameter!");
    }
    console.log("end...")
}

printResult(10)
printResult(8.9)
printResult(6.5)
printResult(2.3)
printResult(-1)
printResult(10.5)