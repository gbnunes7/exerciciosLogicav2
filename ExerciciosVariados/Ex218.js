const arr = [1,2,3,4,5,6,7,8,9,10]

function reduce(arr) {
    return arr.reduce((accumulator,item) => accumulator + item,0)
}

console.log(reduce(arr))