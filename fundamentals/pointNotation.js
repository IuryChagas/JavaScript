// a notação ponto "." serve para acessar os tributos  que sao visiveis dentro de um determinado objeto

console.log(Math.ceil(6.1)) // Para acessar uma função dentro do objeto Math, usa-se o ponto "."!

const obj1 = {}
obj1.name = "keyboard";
//obj1['name'] = "Acoustic Guitar";

console.log(obj1.name);

function Obj(name) {
    this.name = name;
    this.exec = function() {;
        console.log('Exe...');
    }
}

const obj2 = new Obj("wardrobe")
const obj3 = new Obj("Desk")
console.log(obj2.name);
console.log(obj3.name);
obj3.exec();