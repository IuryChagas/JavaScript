export class Customer{

    get name() { return this._name; }
    get cpf(){ return this._cpf; }

     constructor(name, cpf, password){
        this._name = name;
        this._cpf = cpf;
        this._password = password;
    }

    authenticator(){
        return true;
        // https://web.archive.org/web/20110316093835/http://blog.michaeleee.com/2008/02/javascript-interfaces-and-duck-typing.html
    }
};