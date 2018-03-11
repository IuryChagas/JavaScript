function userName(user) {
	document.write("user name: ", user);
}
userName("yourName");

function show(phrase) {
	var p = function() {
		document.write("<p />");
	}
	p();
	document.write(phrase);
}
show("ok!");
show("function testing");

show("<hr>");
/*
(function cje(user){
	show("Name: "+user);
	console.log("Name: ", user);
})(" Chagas");

*/

(function(work){
	console.log("Testing: ", work);
	return show("Testing: "+work);
	/*return console.log("Testing: "+ work);*/
})("it's Work!");


login = prompt("What's your Name? ");

function yourName(name) {
	return "git-"+ name +".io";
}

console.log(yourName(login));
show(yourName(login));