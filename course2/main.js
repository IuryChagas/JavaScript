var age = prompt("How old are you?");  /*parseInt(prompt("How old are you?"));*/

var ageParse = parseInt(age);

if (age >= 18) {
	document.write("☑ Your are autorized!");
} else if (age < 18){
	document.write("☒ Your are not autorized!");
} else {
	document.write("⚠ Your answer ( "+age+" ) is not a number, try again!");
}