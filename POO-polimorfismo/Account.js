export class Account{
    constructor(openingBalance, client, agency){
        this._balance = openingBalance;
        this._client = client;
        this._agency = agency;
    }

    set client(value){
        if (value instanceof Customer) {
            this._client = value;
        }
    }

    get client(){ return this._client; }
    get balance(){ return this._balance; }

    withdraw(value){
        if (value > this._balance || value <= 0) return;
        this._balance -= value;
    }

    deposit(value){
        if(value <= 0) return;
        this._balance += value;
    }

    transfer(value, checkingAccount){
        const withdrawal = this.withdraw(value);
        checkingAccount.deposit(value);
    }
};