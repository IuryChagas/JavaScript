class Cliente { // classes
    nome; // propriedades/atributos
    cpf;
    agencia;
    saldo;
    rg;
}

const cliente1 = new Cliente();

cliente1.nome = "Ronisclay";
cliente1.cpf = 11122233309;
cliente1.agencia = 0001;
cliente1.saldo = 0;
cliente1.rg = 1419305426;

const cliente2 = new Cliente();

cliente2.nome = "Gerenilda";
cliente2.cpf = 88822233309;
cliente2.agencia = 1001;
cliente2.saldo = 0;

console.log(cliente1, cliente2);