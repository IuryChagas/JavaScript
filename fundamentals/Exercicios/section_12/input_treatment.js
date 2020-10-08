function numberValidator(value){
    let number = Number(value)
    if(Number.isNaN(number)){
        return console.log("\n>>> You must only input numbers")
    }else{
        return console.log(number);
    }
}

numberValidator(18)
numberValidator('Ooops')

