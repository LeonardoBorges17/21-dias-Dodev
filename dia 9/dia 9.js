let continuar 

do {
    let nome = prompt("Digite seu nome:")
let idade = prompt("Digite sua idade:")
let peso = prompt("Digite seu peso:")
let altura = prompt("Digite sua altura:")
let profissao = prompt("Digite sua profissão:")

console.log(`Olá ${nome}, você tem ${idade} anos, é ${profissao}, tem ${altura}M de altura e pesa ${peso}kg.`)

if (idade >= 18) {
    console.log("Está liberado para tomar umas geladas")
} else {
    console.log("Sem gelada para você")
}

let meses = idade * 12
let semanas = idade * 52
let dias = idade * 365

console.log("Sua idade em meses é: " + meses)
console.log("Sua idade em semanas é: " + semanas)
console.log("Sua idade em dias é: " + dias)

let imc = peso / (altura * altura)

if (imc < 18.5) {
    console.log("Magreza")
} else if (imc >= 18.5 && imc <= 24.9) {
    console.log("Normal")
} else if (imc > 24.9 && imc <= 30) {
    console.log("Sobrepeso")
} else if (imc > 30) {
    console.log("Obesidade")
}

let anoAtual = 2023
let nascimento = anoAtual - idade
console.log("Você nasceu no ano de " + nascimento)

let anoVivido = nascimento
let idadeAtual = 0

for (let anoVivido = nascimento; anoVivido <= anoAtual; anoVivido++) {
    console.log(anoVivido + " - " + idadeAtual + " anos de idade")
    idadeAtual++
}

    continuar = prompt("Deseja inserir os dados novamente? (s/n)")
    
} while (continuar == "s")