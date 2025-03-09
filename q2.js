let senha_informada
let senha_correta = "4321"
let tentativas = 0

do{
    senha_informada = prompt("Digite a senha de acesso: ")

    if(senha_informada === senha_correta){
        alert("Acesso concedido!")
        break
    }

    tentativas++

    if(tentativas === 3){
        alert("Senha bloqueada!")
        break
    }

}while(tentativas < 3)