let valor
let quantidade
let opcao = prompt("Bem vindo ao doDev-Thru, qual tipo de combustível vocÊ deseja colocar no seu carro?" + "\n1 - abastecer com gasolina; \n2 - abastecer com álcool; \n3 - calibrar os pneus")

switch(opcao) {
    case "1":
        valor = parseInt(prompt("Digite o valor desejado para abastecer:"))
        quantidade = valor / 5
        console.log("Foi abastecido " + quantidade + "L de gasolina")
        break;
        case "2":
        valor = parseInt(prompt("Digite o valor desejado para abastecer:"))
        quantidade = valor / 3
        console.log("Foi abastecido " + quantidade + "L de álcool")
        break;
        case "3":
        console.log("Pneus calibrados com sucesso!")
        break;
    }