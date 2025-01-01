var nome = prompt("Digite seu nome:")
var idade = prompt("Digite sua idade:")
var altura = prompt("Digite sua altura:")
var peso = prompt("Diite seu peso:")
var anoNascimento = (2023 - idade)
var Imc = Math.round((peso / (altura * altura)));

console.log(`Olá ${nome}, você tem ${idade} anos, nasceu em ${anoNascimento}, tem ${altura} de altura, pesa ${peso}kg seu IMC é ${Imc}kg/m²`)