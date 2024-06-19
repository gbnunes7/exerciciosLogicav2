// Faça um programa que leia 5 números e informe a soma e a média dos números.

const numeros = [10,87,53,48,9] 

let soma = numeros.reduce((acumulador,atual) => { // iterador sobre todos os numeros do array (acumulador começa 0, atual é o numero que está sendo iterado)
    return acumulador+atual // acumulador
},0)

let media = soma / numeros.length

console.log(soma,media)