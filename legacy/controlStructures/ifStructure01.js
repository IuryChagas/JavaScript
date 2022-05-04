function justGoodNews(note){
    if(note >= 7){
        console.log('approved with note: '+note);
    }
}
justGoodNews(8.75);
justGoodNews(6.99);

function ifTruePrint(value) {
    if(value){
        console.log('It´s true... '+value);
    }
}
ifTruePrint(); // turn undefined = False
ifTruePrint(null); // Null = False
ifTruePrint(undefined); // explicit undefined = False
ifTruePrint(NaN); // Not a Number = False
ifTruePrint(''); // empty string = False
ifTruePrint(0); // Zero = False
ifTruePrint(-1); // different from zero = True
ifTruePrint(' '); // string with blank space = True
ifTruePrint('?'); // string filled = true
ifTruePrint([]); // empty array = True
ifTruePrint([0, 1]); // array with elements = True 
ifTruePrint({}); //object = True