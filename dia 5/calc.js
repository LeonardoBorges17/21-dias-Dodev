let valor1 = parseInt(prompt("digite um valor"));
let valor2 = parseInt(prompt("digite outro valor"));
let sinal = parseInt(prompt("Digite o número correspondente ao sinal desejado. (n1 = +; n2 = -; n3 = *; n4 = /"))

switch (sinal) {
    case 1:
    console.log("A soma de " + valor1 + "+" + valor2 + " é " + (valor1 + valor2))
    break;
    case 2:
    console.log("A subtração de " + valor1 + "+" + valor2 + " é " + (valor1 - valor2))
    break;
    case 3:
    console.log("A multiplicação de " + valor1 + "+" + valor2 + " é " + (valor1 * valor2))
    break;
    default:
    console.log("A divisão de " + valor1 + "+" + valor2 + " é " + (valor1 / valor2))
    break;
}