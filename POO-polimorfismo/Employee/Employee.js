export class Employee{
    constructor(name, income, cpf){
        this._name = name;
        this._income = income;
        this._cpf = income;

        this._bonus = 1;
        this._password;
    }

    get password(){
        return this._password;
    }
     createPassword(password){
         this._password = password;
     }
}