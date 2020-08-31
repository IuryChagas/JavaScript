import {Customer} from "./Customer.js";
import {Account} from "./Account.js";
import {CheckingAccount} from "./CheckingAccount.js";
import {SavingsAccount} from "./SavingsAccount.js";

const client1 = new Customer('Iury', 32987705158);

const checkingAccountDouglas = new CheckingAccount(0, client1, 1001);
checkingAccountDouglas.deposit(500);

console.log(checkingAccountDouglas);

const savingsAccount = new SavingsAccount(50, client1, 1001);
console.log(savingsAccount);
