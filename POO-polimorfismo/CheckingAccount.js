import { Account } from "./Account.js";

export class CheckingAccount extends Account{
    static accountsCounter = 0;

    constructor(client, agency){
        super(0, client, agency);
        CheckingAccount.accountsCounter++;
    }
};