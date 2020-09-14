// Object: delete and create properties

let car = {
    company: "Tesla",
    electric: true,
    engine: 3.0,
    model: 3,
}

console.log(car.model);
delete car.model;

console.log(car.model);

car.sunroof = true;

console.log(car.sunroof);