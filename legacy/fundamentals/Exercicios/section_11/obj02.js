class Cart {
    constructor(items, quantity, valueTotal){
        if (items === undefined && valueTotal === undefined && quantity === undefined) {
        items = items;
        quantity = quantity;
        valueTotal = valueTotal;
    }
        this.id = 1;
        this.items = items;
        this.quantity = quantity;
        this.valueTotal = valueTotal;
    }
    addItem(item){
        let count = 0;
        for (let cartItem = 0; cartItem < this.items; cartItem) {
            if (this.items[cartItem].id == item.id) {
                this.items[cartItem].quantity += item.quantity;
                count = 1;
            }
        }
        if (count == 0) {
            this.items.push(item);
        }
        this.quantity += item.quantity;
        this.valueTotal += item.value * item.quantity;
    }

    removeItem(){
        for (let cartItem = 0; cartItem < this.items.length; cartItem++) {
            if (this.items[cartItem] == cartItem.id) {
                let obj = this.item[cartItem];
                let index = this.item.findIndex(function(obj){
                    return obj.id == item.id;
                })
                this.valueTotal -= this.items[cartItem].quantity;
                this.valueTotal -= this.items[cartItem].value * this.items[cartItem].quantity;

                this.items.split(index, 1);
            }    
        }
    }
}

let cart = new Cart([
    {
        id: 01,
        item: 'Book',
        quantity: 3,
        value: 183.73
    },
    {
        id: 02,
        item: 'Clook',
        quantity: 1,
        value: 45.96
    }
], 4, 229.69)

console.log(cart)

cart.addItem({id:03, item:"Book", quantity: 2, value: 36.90})
    console.log('>> Cart quantity:', cart.quantity, '\n>> Value total:', cart.valueTotal)

cart.addItem({id:04, item:"backpack", quantity: 1, value: 941.72})
    console.log(cart)

cart.removeItem({id:03, item:"Book", quantity:2, value: 36.90});
    console.log(cart)