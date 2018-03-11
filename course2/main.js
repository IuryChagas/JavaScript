var counter = prompt("choose a number: ");
var i = 0;

while (i < counter){
	document.write(i);
	console.log(i);
	i++;
	document.write("<br>");
}


	for (var n = 0; n < 10; n++) {
		document.write(n);
		console.log(n);
	}

document.write("<hr>");

document.write("<h4>Array [ value , key]</h4>");

[0,1,2,3,4,5,6].forEach(function(value, key) {
	document.write("<br>");
	document.write(value,key);
});