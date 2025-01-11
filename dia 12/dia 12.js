let nomes = []
let senhas = []
let contador = 0

let continuar = true

while(continuar) {
    let opcao = prompt("O que deseja fazer? 1 - cadastro / 2 - login / 3 - excluir / 4 - encerrar")

    switch(opcao) {
        case "1":
            nomes[contador] = prompt("Digite seu nome:")
            senhas[contador] = prompt("Digite sua senha:")
            contador++

            break;
        case "2":
            let nome = prompt("Qual o nome?")
            let senha = prompt("Qual a senha?")
            let loginValido = false

            for (let i = 0; i < nomes.length; i++) {
                if (nome == nomes[i] && senha == senhas[i]) {
                    loginValido = true
                }
            }

            if(loginValido) {
                alert("Login feito com sucesso. Bem-vindo!")
            } else {
                alert("Login ou senha incorreta!")
            }

            break;
        case "3":
            let nomeExcluir = prompt("Qual o nome que deseja excluir?")
            let nomesAux = []
            let senhasAux = []
            let contadorAux = 0

            for (let i = 0; i < contador; i++) {
                if (nomeExcluir == nomes[i]) {
                    alert("Cadastro excluido com sucesso")
                } else {
                    nomesAux[contadorAux] = nomes[i]
                    senhasAux[contadorAux] = senhas[i]
                    contadorAux++
                }
            }

            nomes = nomesAux
            senhas = senhasAux
            contador--

            break;
        case "4":
            continuar = false
            break;
        default:
            console.log("Opção inválida, escolha outra!")
            break;
    }
}