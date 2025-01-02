var fome = prompt("Você está com fome? (s/n)")
var dinheiro = prompt("Você tem dinheiro? (s/n)")
var restaurante = prompt("tem algum restaurante aberto? (s/n)")

if (fome === "nao" || dinheiro === "nao") {
    console.log("Hoje a janta será em casa")
} else if (fome === "sim" && dinheiro === "sim" && restaurante === "nao" ) {
    console.log("Peça um delivery!")
} else if (fome === "sim" && dinheiro === "sim" && restaurante === "sim") {
    console.log("hoje o jantar será no seu restaurante preferido!")
}