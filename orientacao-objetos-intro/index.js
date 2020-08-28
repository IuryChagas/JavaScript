import {Customer} from "./Customer.js";
import {CheckingAccount} from "./CheckingAccount.js";

const client1 = new Customer('Iuzy', 91468194011);
const client2 = new Customer('Douglas', 32987705158);

const checkingAccountIuzy = new CheckingAccount(1001, client1);
checkingAccountIuzy.deposit(500);

const checkingAccountDouglas = new CheckingAccount(1001, client2);
checkingAccountIuzy.transfer(200, checkingAccountDouglas);

console.log(checkingAccountIuzy);
console.log(checkingAccountDouglas);

console.log("Accounts number: ", CheckingAccount.accountsCounter);
