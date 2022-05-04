var velocidadeUsuario = 90;
var monitorDeVelocidade = 80;

if (velocidadeUsuario > monitorDeVelocidade) {
    console.log(`\n Velocidade atual: ${velocidadeUsuario}km/h`);
    console.log("\n Por segurança,\n Reduza a velocidade!");
} else {
    console.log(`\n Velocidade atual: ${velocidadeUsuario}km/h`);
    console.log(" Muito bem! \n Mantenha velocidade abaixo de 80km!");
};