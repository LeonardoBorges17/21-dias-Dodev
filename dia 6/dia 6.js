let numero = parseInt(prompt("Digite um número:"))

for (let i = 0; i <= numero; i++) {
    console.log(i)
}

for (let i = 5; i <= 50; i += 5) {
    console.log(i)
}

for (let i = 50; i >= 0; i -= 5) {
    console.log(i)
}

let calculo = parseInt(prompt("Digite um número inteiro e positivo:"))
for (let i = numero; i <= numero + 2; i++) {
    console.log("Tabuada do número: " + i)
    for (let j = 0; j <= 10; j++) {
        console.log(i + " X " + j + " = " + (i * j))
    }
}