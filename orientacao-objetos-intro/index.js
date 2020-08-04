import {Cliente} from "./Cliente.js";
import {ContaCorrente} from "./ContaCorrente.js";

const cliente1 = new Cliente();

cliente1.nome = "Ronisclay";
cliente1.cpf = 11122233309;

const conta1 = new ContaCorrente();
conta1.cliente = cliente1;
conta1.agencia = 1001;

conta1.depositar(500);
console.log(conta1);
// ================================

const cliente2 = new Cliente();
cliente2.nome = "Aline";
cliente2.cpf = 7329452927;

const conta2 = new ContaCorrente();
conta2.cliente = cliente2;
conta2.agencia = 171;

let valor = 200;
conta1.transferir(valor, conta2);
console.log(conta2);
console.log(conta1);