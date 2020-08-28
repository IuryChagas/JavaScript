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
checkingAccountIuzy.client = client1;
checkingAccountIuzy.deposit(500);

const checkingAccountDouglas = new CheckingAccount();
checkingAccountDouglas.agency = 1001;
checkingAccountDouglas.client = client2;

checkingAccountIuzy.transfer(200, checkingAccountDouglas);

console.log(checkingAccountIuzy);
console.log(checkingAccountDouglas);
console.log(checkingAccountIuzy.balance);
console.log(checkingAccountIuzy.client, checkingAccountDouglas.client);



