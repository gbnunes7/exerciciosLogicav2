// Escreva uma função chamada sumEvenNumbers que recebe um array de números inteiros e retorna a soma de todos os números pares.


function sumEvenNumbers(array) {
    let soma = 0
    for (let i = 0; i < array.length ;i++){
        if (array[i] % 2 === 0) {
            soma = soma + array[i]
        }
    }
    return soma
}


console.log(sumEvenNumbers([2,4,6,1,7,53,2]))