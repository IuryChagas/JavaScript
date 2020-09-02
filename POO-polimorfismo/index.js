import {Customer} from "./Customer.js";
import {Manager} from "./Employee/Manager.js";
import {Director} from "./Employee/Director.js";
import {AuthenticatorSystem} from "./AuthenticatorSystem.js";

const director = new Director("Chagas", 10000, 12345678900);
director.createPassword("03691214");

const isLoggedIn2 = AuthenticatorSystem.login(director, "03691214");
console.log("Director is Logged in: ", isLoggedIn2);

const manager = new Manager("Douglas", 5000, 82468101214);
manager.createPassword("41219630");

const isLoggedIn1 = AuthenticatorSystem.login(manager, "41219630");
console.log("Manager is Logged in: ", isLoggedIn1);