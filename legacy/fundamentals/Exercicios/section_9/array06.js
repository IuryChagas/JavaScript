let names = ['Barbara', 'Mariana', 'Caroline', 'Maysa'];
let dogs = ['Labrador Retrievers', 'German Shepherds', 'Golden Retrievers', 'French Bulldogs',
'Bulldogs', 'Beagles', 'Poodles', 'Rottweilers', 'German Shorthaired Pointers', 'Yorkshire Terriers'];

function checkArrayElements (arr){
    if(arr.length >= 5){
        console.log("\n>> Muitos elementos");
    }else{
        console.log("\n>> Poucos elementos");
    }
}

checkArrayElements(names);
checkArrayElements(dogs);