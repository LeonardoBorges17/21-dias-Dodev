let nome = (prompt("insira seu nome:"));
let idade = parseInt(prompt("insira sua idade:"));
let altura = parseFloat(prompt("insira sua altura:"));
let peso = parseInt(prompt("insira seu peso:"));
let anoNascimento = (2024 - idade);
let imc = peso / (altura * altura);

console.log("Olá " + nome + ", você tem " + idade + " anos, nasceu em " + anoNascimento + " , tem " + altura + " de altura, pesa " + peso + "kg, seu IMC é " + imc.toFixed(2) + " Kg/m²")