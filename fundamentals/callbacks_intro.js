console.log("\n1° script ok!")

setTimeout(function(){console.log('2° Script ok! - Callback!')}, 3000)


console.log("3° script ok!")
console.log("4° script ok!")

setTimeout(function(){
    console.log("5° script ok! - Callback!!")
}, 2000)