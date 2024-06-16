// Faça um programa que leia um nome de usuário e a sua senha e não aceite a senha igual ao nome do usuário, mostrando uma mensagem de erro e voltando a pedir as informações.

const prompt = require('readline-sync')

let nomeUsuario = prompt.question("Qual nome de usuário?");
let senhaUsuario = prompt.question("Qual senha do usuário?");
let tentativas = 0;

while(nomeUsuario === senhaUsuario) {
    console.log("Erro, nome e senha não podem ser iguais.")
    tentativas++
    nomeUsuario = prompt.question("Qual nome de usuário?");
    senhaUsuario = prompt.question("Qual senha do usuário?");
    if (tentativas >= 2) {
        console.log("block")
        return
    }
}