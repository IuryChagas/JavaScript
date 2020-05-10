function nameAndAge (name, age){
    if(age === undefined){
        if (typeof name === NaN) {
            console.log("name: "+ name);
        }else{
            console.log("age: "+ name);
        }
    }else{
        console.log(`name: ${name}, age: ${age}`);
    }
}
console.log(`\n`);

nameAndAge("Kerolini");
nameAndAge("Wendvan", 30);
nameAndAge(30);
// é  possível chamar uma função mesmo que não tenha todos os parâmetros determinados por ela.

const soma = (a, b) => {
    if (a == undefined || b == undefined) {
        console.log(`\n*Esta função requer dois argumentos`);
    }else {
        return a + b;
    }
}

soma(12);