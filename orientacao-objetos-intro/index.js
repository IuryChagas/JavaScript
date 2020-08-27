class customer {
    name;
    cpf;
}

class checkingAccount {
    agency;
    _balance = 0; // #private fields:   https://github.com/tc39/proposal-class-fields#private-fields 

    withdraw(value){
        if (this._balance >= value) {
            this._balance -= value;
            console.log("withdrawal value: ", value);
        }else{
            console.log("> Insufficient balance, Invalid operation!");
        }
    }
    deposit(value){
        if(value >= 1){
            this._balance += value;
            console.log("deposit value: ", value);
            console.log(`total balance: R$ ${this._balance}`);
        }else {
            console.log("Invalid operation!");
        }
    }
}

const client1 = new customer();

client1.name = 'Iuzy';
client1.cpf = 91468194011;

const client2 = new customer();

client2.name = 'Douglas';
client2.cpf = 32987705158;

const checkingAccountIuzy = new checkingAccount();
checkingAccountIuzy.agency = 1001;

const checkingAccountDouglas = new checkingAccount();
checkingAccountDouglas.agency = 1001;

checkingAccountDouglas.deposit(100);
console.log(client2, checkingAccountDouglas);

checkingAccountDouglas.withdraw(50);

console.log(client2, checkingAccountDouglas);

checkingAccountDouglas.deposit(3000);

console.log(checkingAccountDouglas);

console.log(checkingAccountDouglas);