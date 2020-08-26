class customer {
    name;
    cpf;
}

class checkingAccount {
    agency;
    balance;

    withdraw(value){
        if (this.balance >= value) {
            this.balance -= value;
            console.log("withdrawal value: ", value);
        }else{
            console.log("> Insufficient balance, Invalid operation!");
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
checkingAccountIuzy.balance = 0;

const checkingAccountDouglas = new checkingAccount();
checkingAccountDouglas.agency = 1001;
checkingAccountDouglas.balance = 0;

console.log(client1, checkingAccountIuzy);
console.log(client2, checkingAccountDouglas);

checkingAccountDouglas.balance = 100;
console.log(client2, checkingAccountDouglas);

checkingAccountDouglas.withdraw(50);

console.log(client2, checkingAccountDouglas);