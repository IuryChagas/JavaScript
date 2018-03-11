function show(phrase) {
	var p = function() {
		document.write("<p />");
	}
	p();
	document.write(phrase);
}

var arr = [
	"Roadster",
	"Red"
];

/*
.push 	 --> add to end 
.unshift --> add to top

.pop 	--> capt and rm from the front
.shift 	--> capt and rm from the end
.splice --> rm 

.indexOf --> capt value in the index
*/

var arr1 = [
	"Elon Musk"
]

var result = arr.concat(arr1);

console.log(result);
show(result);

arr.unshift("Tesla");
console.log(arr);
show(arr);

arr.indexOf("Roadster");
console.log(arr.indexOf("Roadster"));
show("Roadster index Value: "+arr.indexOf("Roadster"));

/*arr.splice(1,1);*/

/*arr.pop();
console.log(arr);
show(arr);

console.log(arr[0]);
show("Indice [0]: "+arr[0]);

arr.shift();
console.log(arr);
show(arr);

arr.push("on space");
console.log(arr[1]);
show("Indice [1]: "+arr[1]);

*/