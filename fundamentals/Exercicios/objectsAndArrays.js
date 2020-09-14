// OBJETOS É UMA COLEÇÃO DE PROPRIEDADES, PARCIDOS COM ARRAYS

let User = {
    name: "Iury",
    occupation: "Developer",
    age: 28,

    bio: function(){
        console.log("Ready to grow!");
    }
};

console.log("Name:", User.name);
console.log("Age:", User.age);
User.bio(); // <-- Método

// [] = arrays
// {} = objects
// : = atribuição em objeto