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
            return valor;
        }
    }
    depositar(valor){
        // if (valor <= 0.1) return; // tecnica de 'early return' no javascript! https://dev.to/jenniferlynparsons/early-returns-in-javascript-5hfb
        if (valor <= 0.1) {
            return;
        }
        this._saldo += valor;
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

console.log(cliente1);

const valorDeSaque = contaCorrenteRonisclay.sacar(100);
console.log(`Valor do saque: $${valorDeSaque}`);

const saldoAtual = contaCorrenteRonisclay._saldo;
console.log(`Saldo atualizado: $${saldoAtual}`);