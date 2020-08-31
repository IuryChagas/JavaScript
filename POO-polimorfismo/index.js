import {Customer} from "./Customer.js";
import {Account} from "./Account.js";
import {CheckingAccount} from "./CheckingAccount.js";
import {SavingsAccount} from "./SavingsAccount.js";

const client1 = new Customer('Iury', 32987705158);

const checkingAccountIury = new CheckingAccount(0, client1, 1001);
checkingAccountIury.deposit(500);
checkingAccountIury.withdraw(100);

console.log(checkingAccountIury);

const savingsAccountIury = new SavingsAccount(0, client1, 1002);
savingsAccountIury.deposit(50);
savingsAccountIury.withdraw(10);

console.log(savingsAccountIury);