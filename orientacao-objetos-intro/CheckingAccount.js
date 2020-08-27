export class CheckingAccount {
    agency;
 //   client;
    _balance = 0; // #private fields:   https://github.com/tc39/proposal-class-fields#private-fields 

//  ### early return technique ####
// é recomendavel  usar essa tecnica quando um método tem muitas verificações,
// dessa forma na primeira ocorrência que não atender aos requisitos força um retorno para sair do método imediatamente.
// dica: Fazer a lógica inversa. ex: se eu quero true, fazer o if capturar as exceções que caem em false.
    withdraw(value){
        if (value > this._balance || value <= 0) return; // quando apenas uma expressão é comum não utilizar {}
        this._balance -= value;
    }
    deposit(value){
        if(value <= 0) return;
        this._balance += value;
    } 
    // withdraw(value){
    //     if (this._balance >= value) {
    //         this._balance -= value;
    //         return value;
    //     }
    // }
    // depositar(value){
    //     if (value <= 0.1) {
    //         return;
    //     }
    //     this._balance += value;
    // }
    // transferir(value, conta){ // https://medium.com/@ethannam/javascripts-memory-model-7c972cd2c239 
    //     const valueSacado = this.sacar(value);
    //     conta.depositar(value);
    //     conta.cidade = "Curitiba";
    //     value = 700;
    // }
};