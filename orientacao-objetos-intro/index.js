class customer {
    name;
    cpf;
}

class checkingAccount {
    agency;
    _balance = 0; // #private fields:   https://github.com/tc39/proposal-class-fields#private-fields 

//  ### early return technique ####
// é recomendavel  usar essa tecnica quando um método tem muitas verificações,
// dessa forma na primeira ocorrência que não atender aos requisitos força um retorno para sair do método imediatamente.
// dica: Fazer a lógica inversa. ex: se eu quero true, fazer o if capturar as exceções que caem em false.
    withdraw(value){
        if (value > this._balance || value <= 0) return; // quando apenas uma expressão é comum não utilizar {}
        this._balance -= value;
    }
    deposit(value){
        if(value <= 0) return;
        this._balance += value;
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
checkingAccountDouglas.deposit(100);
checkingAccountDouglas.deposit(100);

checkingAccountDouglas.withdraw(150);
console.log(checkingAccountDouglas);