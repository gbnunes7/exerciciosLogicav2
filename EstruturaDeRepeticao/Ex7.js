// Faça um programa que leia 5 números e informe o maior número.

let numeros = [13,5,745,3,12] 
let maiorNumero = numeros[0]; // inicializa um elemento para ser o comparador

for (let i = 1 ; i < numeros.length ; i++) {
    if (numeros[i] > maiorNumero) {
        maiorNumero = numeros[i]} // quando acha reatribui o elmeento
}

console.log(maiorNumero)