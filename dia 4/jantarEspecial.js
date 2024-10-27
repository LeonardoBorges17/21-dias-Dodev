const fome = prompt("Você está com fome? (sim/nao)")
const dinheiro = prompt("quanto de dinheiro você tem? (sim/nao)")
const restaurante = prompt("o restaurante está aberto? (sim/nao)")

if (fome === "nao" || dinheiro === "nao") {
    console.log("Hoje a janta será em casa");
} else if (fome === "sim" && dinheiro === "sim" && restaurante === "sim") {
    console.log("hoje o jantar será no seu restaurante preferido!");
} else {
    console.log("peça um delivery!")
}