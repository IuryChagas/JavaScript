let a = 'blue';
let b = 'black';

let c = a;

a = b;
b = a;

console.log(a);
console.log(b);

b = c;
console.log(b)
let d = 'green ';
a = d;
b = d;

console.log(c);
console.log(a + b);