// Descrição: Escreva uma função que verifica se um determinado elemento existe em um array. Retorne true se o elemento existir e false caso contrário.




function verificaEl(arr,element) {
    // for (let i = 0 ; i < arr.length ; i++) {
    //     if (arr.inclues(element)) {
    //         return true
    //     } else {
    //         return false
    //     }
    // }    
    return arr.includes(element)
}

const array = [1,2,4,65,7]

console.log(verificaEl(array,4))