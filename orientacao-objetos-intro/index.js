class Cliente { // classes
    nome; // propriedades/atributos
    cpf;
    // ContaCorrente {}
};

class ContaCorrente {
    agencia;
    // https://github.com/tc39/proposal-class-fields#private-fields
    // #saldo = 0;
    _saldo = 0;

    sacar(valor){
        if (this._saldo >= valor) {
            this._saldo -= valor;
        } else {
            console.log("> Não é possível proseguir com esta operação!");
        }
    }
    depositar(valor){
        if (valor >= 0.1) {
            this._saldo += valor;
        } else {
            console.log("> Não é possível realizar deposito de valor negativo.");
        }
    }
};

const cliente1 = new Cliente();

cliente1.nome = "Ronisclay";
cliente1.cpf = 11122233309;

const contaCorrenteRonisclay = new ContaCorrente();

contaCorrenteRonisclay.agencia = 0001;

contaCorrenteRonisclay.depositar(100);
contaCorrenteRonisclay.depositar(200);
contaCorrenteRonisclay.depositar(-500);

contaCorrenteRonisclay.sacar(590);
console.log(contaCorrenteRonisclay.saldo);
console.log(cliente1);