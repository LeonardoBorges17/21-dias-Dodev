const nome = prompt("Qual seu nome?");
const idade = prompt("Qual sua idade?");
const carta = prompt("Possui carta de habilitação? (sim/nao)");
const veiculo = prompt("Possui veiculo? (sim/nao)");

if (idade < 18 || carta === "nao") {
    console.log("Leonardo, você não pode dirigir")
} else if (idade >= 18 && carta === "sim" && veiculo === "nao") {
    console.log("Leonardo, você pode dirigir mas não tem um carro")
} else if (idade >= 18 && carta === "sim" && veiculo === "sim") {
    console.log("Leonardo, você será o motorista!")
}