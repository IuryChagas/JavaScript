class Account {
    constructor (saldo){
        this.saldo = saldo;
    }
    deposit (value){
        this.saldo += value;
    }
    withdraw(value){
        this.saldo -= value;
    }

}

let user = new Account(600)
    console.log('Init User >> ',user)

user.deposit(400)
    console.log('Invoked deposit method >>', user)

user.withdraw(50)
    console.log('Invoked withdraw method >>', user)