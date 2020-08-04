export class ContaCorrente {
    agencia;
    cliente;

    _saldo = 0;

    sacar(valor){
        if (this._saldo >= valor) {
            this._saldo -= valor;
            return valor;
        }
    }
    depositar(valor){
        if (valor <= 0.1) {
            return;
        }
        this._saldo += valor;
    }
    transferir(valor, conta){ // https://medium.com/@ethannam/javascripts-memory-model-7c972cd2c239 
        const valorSacado = this.sacar(valor);
        conta.depositar(valor);
        conta.cidade = "Curitiba";
        valor = 700;
    }
};