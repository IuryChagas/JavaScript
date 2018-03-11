// btn Click Me
var click_me = document.getElementById('click_me');

click_me.addEventListener('click', fnClickMe);

function fnClickMe(){
	alert('You clicked me')
}

// Validate Number

function validateNumber() {
	var number = document.getElementById("number_val").value;

	if (isNaN(number) || (number >= 1 && number <= 10)){
		alert('input is not valid');
	}else{
		alert('input is valid');
	}
}

// box over

function over(argument) {
	console.log("Over me!");
	/*document.write("Over me!");*/
	document.getElementById("bg").innerHTML = "<h1>On!</h1>";
}
	function out(argument) {
		document.getElementById("bg").innerHTML = "<h1>Off!</h1>";
	}