document.write("From external script");
console.log("testing localhost!");

var number = 0;
var number1 = 1;
var boolean = false;
var floating = 0.00;

console.log(typeof number);

number = "0" + number1;

console.log(number);

function myFunction () {
	var number = 0.2 + 1;

	console.log(number);
}

myFunction();

var myFunction = function() { // variable as function(){}
	var number1 = 5.2 + 3;
	console.log(number1);
};

myFunction();