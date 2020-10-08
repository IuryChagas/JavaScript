class Car{
    constructor(brand, color, remainingFuel){
        this.brand = brand;
        this.color = color;
        this.remainingFuel = remainingFuel;
    }
    drive(){
        for(let i = 0; i < this.remainingFuel;){
            console.log('Driving...')
            this.remainingFuel -= 10;

            console.log(' >> Fuel level: ', this.remainingFuel)
            if (this.remainingFuel == 0) {
                console.log('\n>> Car stopped!')
                console.log('>> You need to refuel!\n')
                
            }
        }
    }
    refuel(value){
        console.log('>> Refueling, please wait!')
        this.remainingFuel += value;
        console.log('Refuel is done, fuel level now is:', this.remainingFuel)
    }
}

let carro = new Car('BMW', 'Black', 50)
    console.log(carro)

carro.drive()
carro.refuel(100)
carro.drive()