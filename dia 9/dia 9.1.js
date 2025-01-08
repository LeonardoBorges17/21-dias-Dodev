let continuar
let salario

while (continuar != "s") {
    let nome = prompt("Digite seu nome:")
    let idade = parseInt(prompt("Digite sua idade:"))
    salario = parseFloat(prompt("Digite seu salario:"))

    console.log(`Olá ${nome}, você tem ${idade} anos de idade, e seu salário atual é ${salario} reais.`)

    continuar = prompt("As informações estão corretas? (s/n)")
}

    let aumento = 0.015
    console.log("Previsão salarial para os próximos 10 anos:")

    for (let ano = 1; ano <= 10; ano++) {
        salario += salario * aumento
        aumento *= 2

        console.log((2023 + ano) + " = R$ " + salario)
    }