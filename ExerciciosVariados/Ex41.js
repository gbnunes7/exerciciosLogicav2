// Dado um array de números, encontre o maior elemento.

function findMax(arr) {
    const current = arr[0]
    let valorMax = 0;
    for(let i = 1 ; i < arr.length;i++) {
        if (arr[i] > current) {
            valorMax = arr[i] 
        }
    }

    return valorMax
}

console.log(findMax([1, 2, 3, 4, 5,9,24]))