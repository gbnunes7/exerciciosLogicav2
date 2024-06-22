// Soma dos múltiplos de 3 e 5:
// Escreva um programa que calcule a soma de todos os números naturais que são múltiplos de 3 ou 5 e que sejam menores que um número fornecido pelo usuário.

const numeros = [1,3,5,6,7,3,2]
let soma = 0;
for (let i = 0 ; i < numeros.length; i++) {
    if (numeros[i] % 3 === 0 || numeros[i] % 5 === 0) {
        soma = soma + numeros[i]
    }
}

console.log(soma)