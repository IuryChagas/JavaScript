class Cart {
    constructor(item, value, quantity){
        if (item === undefined && value === undefined && quantity === undefined) {
        item = '';
        value = 0;
        quantity = 0;
    }
        this.id = 1;
        this.items = item;
        this.value = value;
        this.quantity = quantity;
    }
    addItem(item, value, quantity){
        this.items += item;
        this.value += value;
        this.quantity += quantity;
    }
    delItem(id){
        this.id = undefined;
        this.items = undefined;
        this.value = undefined;
        this.quantity = undefined;
        console.log('\nexcluded with success!\n')
    }
}

let book = new Cart()
    console.log(book)

let clock = new Cart('clock', 173.15, 15)
    console.log(clock)

clock.delItem(1);
    console.log(clock)

book.addItem('outliers', 167.83, 2)
    console.log(book)

console.log(book.value)