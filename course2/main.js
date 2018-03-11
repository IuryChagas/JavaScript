var age = prompt("How old are you?");  /*parseInt(prompt("How old are you?"));*/

var ageParser = parseInt(age);

switch (true) {
	case (ageParser >= 18):
		document.write('☑ You are authorized!');
		break;

	case (ageParser < 18):
		document.write('☒ You are not authorized!');
		break;

	case (ageParser != 18):
		document.write('⚠ Your answer ( '+age+' ) it is not a number, try again!');
		break;

	default:
		document.write('default function');
	break;
}