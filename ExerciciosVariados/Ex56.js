const array = [1,2,3,4,5,6,7,8]

const n1 = array[0]
let nSequencial = 0

for (let i = 1; i < array.length - 1; i++) {
    if (array[i] + n1 != array[i + 1]) {
        nSequencial = array[i+ 1] 
        break
    } else if (array[i] + n1 == array[i + 1]){
        nSequencial = null
    }
}

console.log(nSequencial)