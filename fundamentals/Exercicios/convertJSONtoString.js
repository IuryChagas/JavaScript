const car = {
    "brand": "BMW",
    "wheels": 4,
    "doors": 2,
    "type": "Sedan"
};

let jsonToString = JSON.stringify(car);
console.log("\n");

console.log('Type of JsonToString: ', typeof jsonToString);
console.log("JSON to String: ", jsonToString);

console.log("\n-------------------------------------\n");


let stringToJSON = JSON.parse(jsonToString);
console.log("Type of stringToJSON: ", typeof stringToJSON);
console.log("String to JSON: ", stringToJSON);
console.log('Company: ', stringToJSON.brand);