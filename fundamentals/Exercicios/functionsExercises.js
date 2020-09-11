function accepter(age){
    if (age >= 18) {
        return console.log("access allowed!");
    }else{
        return console.log("access denied!");
    }
}

accepter(21);
accepter(17);