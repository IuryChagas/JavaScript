import {Customer} from "./Customer.js";
import {CheckingAccount} from "./CheckingAccount.js";

const checkingAccountIuzy = new CheckingAccount();
checkingAccountIuzy.agency = 1001;
checkingAccountIuzy.client = new Customer();
checkingAccountIuzy.client.name = 'Iuzy';
checkingAccountIuzy.client.cpf = 91468194011;
checkingAccountIuzy.deposit(500);

const checkingAccountDouglas = new CheckingAccount();
checkingAccountDouglas.agency = 1001;
checkingAccountDouglas.client = new Customer();
checkingAccountDouglas.client.name = 'Douglas';
checkingAccountDouglas.client.cpf = 32987705158;

checkingAccountIuzy.transfer(200, checkingAccountDouglas);

console.log(checkingAccountIuzy);
console.log(checkingAccountDouglas);



