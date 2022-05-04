function extractEvenNumbers(number){
    for (let n = 0; n < number;) {
            if (number % 2 == 0) {
                console.log(number);
            }
            number--;
    }
}
extractEvenNumbers(15);