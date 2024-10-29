let servicos = prompt("Qual serviço você deseja? (n1 = gasolina; n2 = álcool")
let valor
let litros

switch (servicos) {
    case "1":
    valor = parseInt(prompt("Quantos reias em gasolina?"))
    litros = valor / 5
    console.log("A quantidade de gasolina em litros fica " + litros + "R$")
    break;
    case "2":
    valor = parseInt(prompt("Quantos reias em álcool?"))
    litros = valor / 3
    console.log("A quantidade de gasolina em litros fica " + litros + "R$")
    break;
    default:
        console.log("Pneus calibrados com sucesso")
    break
}