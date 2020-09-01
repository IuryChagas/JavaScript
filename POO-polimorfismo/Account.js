// abstracting classe
export class Account{
    constructor(openingBalance, client, agency){
        if(this.constructor == Account){
            throw new Error("Você não deveria instanciar um objeto do tipo Account diretamente!\n")
        }
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
        let rate = 1;
        return this._withdraw(value, rate);

    }
    _withdraw(value, rate){
        const withdrawalValue = rate * value;
        if (this._balance >= withdrawalValue) {
            this._balance -= withdrawalValue;
            return withdrawalValue;
        }
        return 0;
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