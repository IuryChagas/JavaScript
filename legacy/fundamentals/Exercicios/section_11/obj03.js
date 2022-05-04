class Address {
    constructor(street, neighborhood, city, state){
        this.street = street;
        this.neighborhood = neighborhood;
        this.city = city;
        this.state = state;
    }
    streetUpdate(newValue){
        this.street = newValue;
    }
    neighborhoodUpdate(newValue){
        this.neighborhood = newValue;
    }
    set cityUpdate(newValue){
        this.city = newValue;
    }
    set stateUpdate(newValue){
        this.state = newValue;
    }
}

let clientAddress = new Address('South 4th Street', 'Louisville', 'Curitiba', 'Ohio');


console.log(clientAddress)

clientAddress.streetUpdate("Arizona");
    console.log('\nRua: ', clientAddress.street)

clientAddress.neighborhoodUpdate("Betel");
    let neighborhood = clientAddress.neighborhood;
    console.log('Bairro: ', neighborhood);

clientAddress.stateUpdate = "Parana";
    let state = clientAddress.state;
    console.log('Estado: ', state)

console.log();
clientAddress.cityUpdate = "Colídia";
    console.log(clientAddress)