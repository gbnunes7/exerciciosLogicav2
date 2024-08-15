const arr = [1,2,3,4,5,6,7,87,2,3,42]

function filterOdd(arr) {
    return arr.filter((arrNumber) => arrNumber % 2 == 0)
}

console.log(filterOdd(arr))