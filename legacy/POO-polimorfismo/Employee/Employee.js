export class Employee{
    constructor(name, income, cpf){
        this._name = name;
        this._income = income;
        this._cpf = income;

        this._bonus = 1;
        this._password;
    }

    authenticator(password){
        return password == this._password;
    }

     createPassword(password){
         this._password = password;
     }
}