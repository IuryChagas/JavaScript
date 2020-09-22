let names = ['Barbara', 'Mariana', 'Douglas', 'Caroline', 'Maysa'];

let result = false;
let i;
let name;

for(i = 0; i < names.length; i++){
    if (names[i] == 'Douglas') {
        //console.log("\nNome encontrado!");
        //console.log(":>> ", names[i]);
        result = true;
        name = names[i];
    }

}
if (result == true) {
    console.log("\nNome encontrado!");
        console.log("\n name:>> ", name);
        result = true;
}else {
    console.log("\nNão encontrado!");
}