function sumOfMinimums(arr) {
    let sum = 0;
    for(let i = 0; i < arr.length; i++) {
        let min = Math.min(...arr[i]);
        sum += min;
    }
    return sum;
}

console.log(sumOfMinimums([[1,2,4],[123,5]]))

export default function ola() {
    return "olá"
}