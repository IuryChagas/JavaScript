// Uma forma de uma função receber indefinidos parâmetros;
// > O Operador rest se converte em array.
// > O parâmetro é definido por: ...name
let n0 = -1;
let n1 = 234;
let n2 = 41;
let n3 = 62;

function printNumbers(...args){
    for(let i = 0; i < args.length; i++){
        console.log(args[i]);
    }
}

printNumbers(n0, n1, n2, n3);
console.log("===")
printNumbers(00,248,8579,54,1447,52);