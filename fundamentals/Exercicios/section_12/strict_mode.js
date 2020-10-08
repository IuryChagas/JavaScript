"use strict"
class Account{
    constructor(currentAccount, savingsAccount, interestRate){
        this.currentAccountBalance = currentAccount;
        this.savingsAccountBalance = savingsAccount;
        this.interestRate = interestRate;
        this.interestRate = (this.interestRate * interestRate) / 100; 
    }
    currentAccountDeposit(value){
        this.currentAccountBalance += value;
    }
    savingsAccountDeposit(value){
        this.savingsAccountBalance += value;
    }
    transferToCurrentAccount(value){
        this.savingsAccountBalance -= value;
        this.currentAccountBalance += value;
    }
    transferToSavingsAccount(value){
        this.currentAccountBalance -= value;
        this.savingsAccountBalance += value;       
    }
    withdrawCurrentAccount(value){
        let withdrawnvalue = value;
        this.currentAccountBalance -= withdrawnvalue;
    }
    withdrawSavingsAccount(value){
        let withdrawnvalue = value;
        this.currentAccountBalance -= withdrawnvalue;
    }
}

let conta = new Account(0, 0, 1.5)

console.log(conta)
conta.currentAccountDeposit(7500)
    console.log('Deposito realizado >>> Saldo conta corrente: ',conta.currentAccountBalance)

conta.savingsAccountDeposit(5000)
    console.log('Deposito realizado >>> Saldo conta poupança: ',conta.savingsAccountBalance)

console.log()

conta.transferToSavingsAccount(4500)
    console.log('Transferencia realizada >>> Saldo conta poupança atualizada: ',conta.savingsAccountBalance)
    console.log('Atualização conta corrente >>> Saldo: ', conta.currentAccountBalance)

console.log()

conta.transferToCurrentAccount(500)
    console.log('Transferencia realizada >>> Novo saldo conta corrente: ',conta.currentAccountBalance)
    console.log('Atualização conta poupança >>> Saldo: ', conta.savingsAccountBalance)

// strict mode must identify error
delete Object.prototype;