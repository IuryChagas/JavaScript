import { Account } from "./Account.js";

export class SalaryAccount extends Account {
    constructor(client){
        super(0, client, 100);
    }
    withdraw(value){
        const rate = 1.01;
        return this._withdraw(value, rate);
    }
}