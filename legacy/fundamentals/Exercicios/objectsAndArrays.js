// Object: Mutação (Mutability) - Um objeto pode herdar todas as características do outro, virando uma referência ao mesmo.

let carA = {
    company: "Tesla",
    price: 46.500,
    electric: true,
    absBrakes: true,
    model: 3
}

carB  = carA;

let carC = {
    company: "Tesla",
    price: 46.500,
    electric: true,
    absBrakes: true,
    model: 3
}

console.log("carB == carA: ", carB == carA);
console.log("carA == carB: ", carA == carB);
console.log("carC == carB: ", carC == carB);
console.log("carC == carA): ", carC == carA);

console.log("\n==================\n");

let avatar = {
    name: "Pedro"
}

let avatar2 = avatar;
console.log("avatar == avatar2: ", avatar == avatar2);

let avatar3 = {
    name: "Jose"
}
console.log("avatar3 == avatar: ", avatar3 == avatar);
avatar2.name = "Laisla";
console.log("avatar.name: ",avatar.name)
console.log("avatar2 == avatar: ", avatar2 == avatar);

let avatar4 = {
    name: 'Douglas',
    nickname: 'Iury',
    age: 42,
    walk: function(){
        console.log("walking...");
    }
}
console.log();

console.log(avatar4['name']);
avatar4.walk();

console.log();

let fruits = ['Orange', 'Strawberry', 'Pineapple'];
console.log(fruits);

console.log('method: length');
console.log(fruits.length);

console.log('method: toString() >> Convert to String');
console.log(fruits.toString());

console.log('method: push() >> to add new item at the end');
fruits.push('Banana');
console.log(fruits);

console.log('method: unshift() >> to add a new item at the beginning');
fruits.unshift('watermelon');
console.log(fruits);

console.log('method: join() >> to customize a concatenation');
console.log(fruits.join(',\n'));


console.log('method: shit() >> to remove first item');
console.log('item removed: ~',fruits.shift(),'~');

console.log(fruits);
console.log('other item removed again!');
fruits.shift();
console.log(fruits);

console.log('method: sort() >> to ordenate items');
let fruitsAZ = ['Grapes','Kiwifruit','Acerola','Clementine','Figs','Watermelon','Banana','Durin']
console.log(fruitsAZ.sort());

console.log('method: reverse() >> to reverse the order of items');
console.log(fruitsAZ.reverse())

console.log('method: pop() >> to remove last item');
console.log(fruitsAZ.pop());
console.log(fruitsAZ);

let nums = [0,1,2,3,4,5,6];

console.log(nums.slice(0,2));
console.log(nums.slice(4,6));
console.log(nums.slice(2,5));
console.log(nums.slice(3));
console.log(nums.slice(-2));
