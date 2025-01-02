var nome = prompt("Qual seu nome?")
var idade = prompt("Qual sua idade?")
var carta = prompt("Você possui habilitação? (s/n)")
var carro = prompt("Você possui carro? (s/n)")

if (idade <= 17 || carta === "nao") {
    console.log(`${nome} você não pode dirigir`)
} else if (idade >=18 && carta === "sim" && carro === "nao") {
    console.log(`${nome}, você pode dirigir mas não tem um carro`)
} else if (idade >=18 && carta === "sim" && carro === "sim") {
    console.log(`${nome}, você será o motorista!`)
}