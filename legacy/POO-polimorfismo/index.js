import {Customer} from "./Customer.js";
import {Manager} from "./Employee/Manager.js";
import {Director} from "./Employee/Director.js";
import {AuthenticatorSystem} from "./AuthenticatorSystem.js";

const director = new Director("Chagas", 10000, 12345678900);
director.createPassword("03691214");

const directorIsLoggedIn = AuthenticatorSystem.login(director, "03691214");
console.log("Director is Logged in: ", directorIsLoggedIn);

const manager = new Manager("Douglas", 5000, 82468101214);
manager.createPassword("41219630");

const managerIsLoggedIn = AuthenticatorSystem.login(manager, "41219630");
console.log("Manager is Logged in: ", managerIsLoggedIn);

const customer = new Customer("Iury", 17106105342, "48163264");
// customer.createPassword(customer, "48163264");

const customerIsLoggedIn = AuthenticatorSystem.login(customer, "48163264");
console.log("Customer is Logged in: ", customerIsLoggedIn);