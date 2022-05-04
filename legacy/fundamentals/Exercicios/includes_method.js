const nums = [1, 2, 3, 4, 5, 6];

nums.forEach(num =>{
    console.log(num);
});

console.log();
name = ['Jessica', 'Camilla', 'Melanie', 'Paula', 'Barbara', 'Maiza'];
name.forEach((currentValue, index, completeArray)=>{
    console.log(index, currentValue);
});

// Verificar se um array tem um determinado elemento;
let cars = ['BMW', 'Tesla', 'Audi', 'Citroen'];

console.log('\nhas Car Audi: ', cars.includes('Audi'));
console.log('\nhas Car Ford: ', cars.includes('Ford'));
if (!cars.includes('Ford')) {
    cars.push('Ford');
    cars.forEach((car, index)=>{
        console.log(index, car)
    });
}else{
    console.log('Oops!');
}