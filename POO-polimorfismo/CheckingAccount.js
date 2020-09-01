import { Account } from "./Account.js";

export class CheckingAccount extends Account{
    static accountsCounter = 0;

    constructor(openingBalance, client, agency){
        super(0, client, agency);
        CheckingAccount.accountsCounter++;
    }
    withdraw(value){

        let rate = 1.1;
        return super._withdraw(value, rate);
    }
};