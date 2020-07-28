class Cliente { // classes
    nome; // propriedades/atributos
    cpf;
    // ContaCorrente {}
};

class ContaCorrente {
    agencia;
    saldo;

    sacar(valor){

        if (this.saldo >= valor) {
            this.saldo -= valor;
        }
    }
};

const cliente1 = new Cliente();

cliente1.nome = "Ronisclay";
cliente1.cpf = 11122233309;

const cliente2 = new Cliente();

cliente2.nome = "Gerenilda";
cliente2.cpf = 88822233309;

const contaCorrenteRonisclay = new ContaCorrente();

contaCorrenteRonisclay.agencia = 0001;
contaCorrenteRonisclay.saldo = 0;

console.log(contaCorrenteRonisclay.saldo);
contaCorrenteRonisclay.saldo = 100;
console.log(contaCorrenteRonisclay.saldo);

contaCorrenteRonisclay.sacar(200);
console.log(contaCorrenteRonisclay.saldo);


console.log(cliente1);
console.log(cliente2);