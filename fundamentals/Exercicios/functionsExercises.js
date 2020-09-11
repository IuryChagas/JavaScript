function dataTypeIdentifier(data){
    if(typeof data === 'number') {
        console.log("\nType of: Number");
    }else if(typeof data === 'string'){
        console.log("\nType of: String");
    }else if(typeof data === 'boolean'){
        console.log("\nType of: Boolean");
    }
}

dataTypeIdentifier(42);
dataTypeIdentifier("!");
dataTypeIdentifier(true);