export class Customer{
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes
    get name() { return this._name; }
    get cpf(){ return this._cpf; }

     constructor(name, cpf){
        this._name = name;
        this._cpf = cpf;   
    }
};