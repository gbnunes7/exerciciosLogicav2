// Dada uma string contendo apenas dígitos, some todos os dígitos da string.

function sumDigits(str) {
    str = str.split("").map(Number)
    return str.reduce((accumulate,currentValue) => accumulate + currentValue,0)
}

console.log(sumDigits("1234"))