let name = "Iury";

for (let x = 0; x <= 10; x = x + 1){

    if (x == 3) {
        name = "Chagas";
    }

    if (x == 5 && name == "Chagas") {
        console.log(`O nome é:  ${name}, pode parar!`);
        break;
    }
    console.log(x);
}