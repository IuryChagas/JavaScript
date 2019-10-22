var list = ["apple", "lemon", "orange"];
console.log(list[0]);
console.log(list[1]);
console.log(list[2]);
console.log("list>> "+ list);
console.log(list.push("grape")); // add!
console.log("list>> "+ list);
console.log(list.reverse()); // invert!
console.log(list);
list.pop(); // remove! 
console.log(list);
console.log(list.length);
console.log(list[0]);
console.log(list.toString()[0]);
console.log(list.push("watermelon", "apple"));
console.log(list.join(" | "));

var fruit = {name: "apple", color: "green"};
console.log(fruit);
console.log("fruit name: "+fruit.name);
console.log("fruit color: "+fruit.color);

var fruits = [{name: "apple", color: "red"}, {name: "orange", color: "orange"}, {name: "lemon", color: "green"}];
console.log("fruit name: "+ fruits[1].name);
console.log("fruit name: "+ fruits[2].name);
console.log("fruit name: "+ fruits[2].color);
/*

var name = "Iury Chagas";
var age = 27;
var phra = "Hellow World";

console.log("initial commit >> "+name);
console.log(age + " years old");
console.log(phra);
console.log(phra.toUpperCase());
console.log(phra.replace("World", "browser!"));

*/
