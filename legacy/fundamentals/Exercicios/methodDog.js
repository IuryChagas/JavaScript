let dog = {
    dogBreed: 'undefined',
    setdogBreed: function(newdogBreed){
        this.dogBreed = newdogBreed;
    },
    getdogBreed: function(){
        return 'Dog Breed: '+ this.dogBreed;
    },

}

console.log(dog);
dog.setdogBreed("Poodles");
console.log(dog.getdogBreed());