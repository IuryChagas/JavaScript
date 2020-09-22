let Calc = {
    sum: function(OperatorA, OperatorB){
        return console.log(OperatorA + OperatorB);
    },
    subtract: function(OperatorA, OperatorB){
        return console.log(OperatorA - OperatorB);
    },
    multiply: function(OperatorA, OperatorB){
        return console.log(OperatorA * OperatorB)
    },
    division: function(OperatorA, OperatorB){
        return console.log(OperatorA / OperatorB)
    }
}

let sum = new Calc.sum(25,10);
    sum;

let sub = new Calc.subtract(25, 5);
    sub;

let mult = new Calc.multiply(6, 13);
    mult;

let divi = new Calc.division(100, 2.7);
    divi;