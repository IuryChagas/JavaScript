import {Customer} from "./Customer.js";
import {CheckingAccount} from "./CheckingAccount.js";

const client1 = new Customer();

client1.name = 'Iuzy';
client1.cpf = 91468194011;

const client2 = new Customer();

client2.name = 'Douglas';
client2.cpf = 32987705158;

const checkingAccountIuzy = new CheckingAccount();
checkingAccountIuzy.agency = 1001;

const checkingAccountDouglas = new CheckingAccount();
checkingAccountDouglas.agency = 1001;

checkingAccountDouglas.deposit(100);
checkingAccountDouglas.deposit(100);
checkingAccountDouglas.deposit(100);

checkingAccountDouglas.withdraw(150);
console.log(checkingAccountDouglas);