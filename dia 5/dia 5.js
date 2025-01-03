let n1 = parseInt(prompt("Digite um número:"))
let n2 = parseInt(prompt("Digite outro número:"))
let sinal = parseInt(prompt("Escolha a operação que deseja realizar:" + "\n1 = +; \n2 = -; \n3 = *; \n4 = /"))

switch(sinal) {
    case 1:
        console.log("O resultado de " + n1 + " + " + n2 + " é " + (n1 + n2))
    break;
    case 2:
        console.log("O resultado de " + n1 + " - " + n2 + " é " + (n1 - n2))
    break;
    case 3:
        console.log("O resultado de " + n1 + " x " + n2 + " é " + (n1 * n2))
    break;
    case 4:
        console.log("O resultado de " + n1 + " / " + n2 + " é " + (n1 / n2))
    break;
    }