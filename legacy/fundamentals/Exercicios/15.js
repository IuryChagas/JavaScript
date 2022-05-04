let num = 163;
let divisores = 0;

for(let n = 1; n <= num; n++){
    
    if (num % n == 0){
        divisores++;
    }
}

if (divisores == 2) {
    console.log(`\n >> O número [${num}] é PRIMO`);
} else {
    console.log(`\n >> O número [${num}] não é primo`);
}