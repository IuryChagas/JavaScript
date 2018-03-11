function show(phrase) {
	var p = function() {
		document.write("<p />");
	}
	p();
	document.write(phrase);
}

var prop1 = prompt("Define a car MODEL: ");
var prop2 = prompt("Define a NAME: ");
var prop3 = prompt("Define a COLOR: ");

/*var obj = new Object();*/

/*var obj = {
	MODEL: prop1,
	NAME : prop2,
	COLOR: prop3
};*/

/*var obj = {};

obj.MODEL = prop1;
obj.NAME  = prop2;
obj.COLOR = prop3*/

var obj = {};

obj["MODEL"] = prop1,
obj["NAME"] = prop2,
obj["COLOR"] = prop3,

obj.start = function(){
	show("I'm ready! 🚘");
	console.log("I'm ready! 🚘");
}

console.log(JSON.stringify(obj));
console.log(obj);
show("<h3> DEFINITIONS:</h3>"+JSON.stringify(obj));
show("");
obj.start();