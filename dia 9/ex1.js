let continuar
do {
    let nome = prompt("Qual seu nome?")
    let idade = prompt("Qual sua idade?")
    let peso = prompt("Qual seu peso?")
    let altura = prompt("Qual sua altura?")
    let profissao = prompt("Qual sua profissão?")
    
    console.log(`Olá ${nome}, Você tem ${idade} anos, é ${profissao}, tem ${altura}M e pesa ${peso}kg.`)
    
    if (idade < 18) {
        console.log("Sem gelada para você")
    } else {
        console.log("Está liberado para tomar umas geladas")
    }
    
    let meses = idade * 12
    let semanas = idade * 52
    let dias = idade * 365
    
    console.log("Sua idade em meses é " + meses)
    console.log("Sua idade em semanas é " + semanas)
    console.log("Sua idade em dias é " + dias)
    
    let imc = peso / (altura * altura)
    
    if (imc < 18.5) {
        console.log("Magreza")
    } else if (imc >= 18.5 && imc <= 24.9) {
        console.log("Normal")
    } else if (imc >= 25 && imc <= 30 ) {
        console.log("Sobrepeso")
    } else if (imc > 30) {
        console.log("Obesidade")
    }
    
    let anoAtual = 2024
    let anoNascimento = anoAtual - idade
    console.log(`Você nasceu em ${anoNascimento}`)
    
    let anoVivido = anoNascimento
    let idadeAtual = 0
    
    for(let anoVivido = anoNascimento; anoVivido <= anoAtual; anoVivido++) {
        console.log(anoVivido + " - " + idadeAtual + " anos de idade ")
        idadeAtual++    
    }

    continuar = prompt("Deseja inserir os dados novamente? (s/n)")
} while (continuar === "s")