export class Customer{

    get name() { return this._name; }
    get cpf(){ return this._cpf; }

     constructor(name, cpf, password){
        this._name = name;
        this._cpf = cpf;
        this._password = password; 
    }
    authenticator(password){
        return password == this._password;
    }
};