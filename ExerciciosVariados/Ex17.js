// Contagem de Vogais:
// Escreva um programa que conte quantas vogais (a, e, i, o, u) existem em uma string fornecida pelo usuário.
const string = "OOOOiiiooo".toLowerCase()
function contaVogais(string) {
    let contagemVogais = 0;
    for (let i = 0 ; i < string.length ; i++) {
        if(string[i] === "a" || string[i] === "e" || string [i] === "i" || string[i] === "o" || string[i] === "u") {
            contagemVogais++
        }
    }

    return contagemVogais
}

console.log(contaVogais(string))