
try {
    let varC = varA + varB;
} catch(error){
    console.log("Algo deu errado: ", error)
    // throw new Error(error); 
}finally{
    console.log("to be continue....")
}

console.log('test')