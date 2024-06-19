// Faça um programa que peça 10 números inteiros, calcule e mostre a quantidade de números pares e a quantidade de números impares.

const numeros = [1,5,4,3,2,6,3,1,7,8,1]
let qtdPares = 0
let qtdImpar = 0

for (let i = 0 ; i < numeros.length ; i++) {
    if(numeros[i] % 2 === 0) {
        qtdPares++
    } else {
        qtdImpar++
    }
}

console.log(qtdImpar,qtdPares)