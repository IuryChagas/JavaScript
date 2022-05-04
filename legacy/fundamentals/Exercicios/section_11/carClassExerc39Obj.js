class Car{
    constructor(brand, color, remainingFuel){
        this.brand = brand;
        this.color = color;
        this.remainingFuel = remainingFuel;
    }
    drive(){
        let km = 15;
        let fuelConsumption = this.remainingFuel / km;
        this.remainingFuel -= fuelConsumption;
        console.log(this.remainingFuel)

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
carro.drive()
carro.drive()
carro.refuel(100)
carro.refuel(110)
carro.drive()
carro.drive()
carro.drive()
carro.drive()
carro.drive()
carro.drive()