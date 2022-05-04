function arrayInterator(arr){
    if(arr.length == 0){
        throw new Error("The Array must have elements!")
    }else{
        for(let i = 0; i < arr.length; i++){
            console.log(arr[i])
        }
    }
}

let start = [];
arrayInterator(start)