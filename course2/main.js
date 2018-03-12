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

function over(object) {
	console.log("Over me!");
	object.innerHTML = '<h1>On!</h1>';
	object.style.background = '#1987bf61';
}
	function out(object) {
		object.innerHTML = "<h1>Off!</h1>";
		object.style.background = '#c51c1cb5';
	}

// get by .className

var input = document.getElementsByClassName('number_val_input');

var btn_generate = document.getElementById('generate_btn');

btn_generate.addEventListener('click', generate);

function generate() {
	var value = input[0].value;

	for (var i = 0; i < parseInt(value); i++) {

		var inpt = document.createElement('input');
		inpt.id = "btn_" + i;

		var body = document.getElementsByTagName('body');

		body[0].appendChild(inpt);
	}
}

// populating with selector

var body1 = document.getElementsByTagName('body');

var select = document.createElement('select');
body1[0].appendChild(select);


for (var i = 0; i < 10; i++) {
    var option = document.createElement('option');
    option.id = '#id_' + i;
    option.value = i;
    option.innerHTML = i;

    select.appendChild(option);
}

var title = document.getElementById('styler');
title.style.color = 'orange';

var background = document.getElementById('bg');
/*background.style.background = '#c51c1cb5';*/