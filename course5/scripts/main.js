function clicked(){
    document.getElementById("thanks").innerHTML = "your action has been received!";
    console.log(document.getElementById("thanks"));
}

/* function sum(n1, n2){
    return n1 + n2;
}
console.log(">> n1 + n2 : "+ sum(15, 15));

*/
/*


function validAge(age){
    if(age >= 18){
        console.log(">> Take the keys! Your age is: "+ age +" years old");
        return true;
    }else{
        console.log(">> sorry access denied! Your age is: "+ age +" years old");
        return false;
    }

}

var age = prompt("How old you are? ");
console.log(validAge(age));


*/
/*
function validatorAge(age){
    const call;
    if(age >= 18){
        console.log("Take the keys!");
        const call = true;
    }else{
        console.log("sorry call to your Dad!");
        const call = false;
    }

    return call;
};

var age = prompt("How old you are? ");
console.log(validatorAge(age));
*/

/*
var d = new Date();

console.log(d);
console.log(d.getMinutes());
console.log(d.getDay());
console.log(d.getMonth()+1);
console.log(d.getFullYear());
console.log(d.getUTCHours());
console.log(d.getTimezoneOffset());
*/

/*

var age = 27;

if(age >= 18){
    console.log("Maior de idade!");
}else if(age <= 17){
    console.log("Menor de idade!");
}else{
    console.log("I don't understand what's that, dude!");
};

var count = 0;
while(count < 10){
    console.log(count);
    count++;
    // count = count +1;
}

console.log("________________________________________");
for(countf = 10; countf >= 0; countf--){
    console.log(countf);
}


*/




/*

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

*/

/*
var fruit = {name: "apple", color: "green"};
console.log(fruit);
console.log("fruit name: "+fruit.name);
console.log("fruit color: "+fruit.color);

var fruits = [{name: "apple", color: "red"}, {name: "orange", color: "orange"}, {name: "lemon", color: "green"}];
console.log("fruit name: "+ fruits[1].name);
console.log("fruit name: "+ fruits[2].name);
console.log("fruit name: "+ fruits[2].color);

++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

var name = "Iury Chagas";
var age = 27;
var phra = "Hellow World";

console.log("initial commit >> "+name);
console.log(age + " years old");
console.log(phra);
console.log(phra.toUpperCase());
console.log(phra.replace("World", "browser!"));

*/
