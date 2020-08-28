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
    transfer(value, checkingAccount){
        const withdrawal = this.withdraw(value);
        checkingAccount.deposit(value);
        // ao passar um objeto como parâmetro no método, estou dando a possibilidade ao método de adicionar e alterar
        // outros atributos do objeto. Exe abaixo:
        checkingAccount.city = "Curitiba"; // ou seja, mesmo tal "CheckingAccount" não possuir originalmente o atributo "city"
        // por tal classe estar sendo referenciada diretamente, da-se ao método a liberdade de adicionar novos atributos.
        // No Javascript é possível dinamicamente adicionar novos atributos em tempo de execução.
    }
};