export class CheckingAccount {
    agency;
    client;
    _balance = 0; 

    withdraw(value){
        if (value > this._balance || value <= 0) return;
        this._balance -= value;
    }
    deposit(value){
        if(value <= 0) return;
        this._balance += value;
    }
};