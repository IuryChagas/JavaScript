import { Account } from "./Account.js";

export class SavingsAccount extends Account{
    constructor(openingbalance, client, agency){
        super(0, client, agency);
    }
}