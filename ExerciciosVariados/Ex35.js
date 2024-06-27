// Você recebe um array de números, retorna a soma de todos os números positivos.

// Exemplo [1,-4,7,12] => 1 + 7 + 12 = 20

// Nota: se não tiver nada para somar, o retorno será padronizado para 0.

const array = [1,-4,7,12]
let soma = 0
for(let i = 0 ; i < array.length ; i++) {
    
    if(array[i] > 0) {
        soma = soma + array[i]
    }
    
}
console.log(soma)