// Given two binary strings a and b, return their sum as a binary string.

function binarioParaDecimal(binario) {
    let decimal = 0;
    let tamanho = binario.length;

    for (let i = 0; i < tamanho; i++) {
        let bit = binario[tamanho - 1 - i];
        if (bit === '1') {
            decimal += Math.pow(2, i);
        }
    }

    return decimal;
}


var addBinary = function(a, b) {
    if(a == 0 || b == 0) {
        return 0
    }
    const aDecimal = binarioParaDecimal(a)
    const bDecimal = binarioParaDecimal(b)
    let sumDecimal = aDecimal + bDecimal
    const binary = []
     let resto = 0
     while (sumDecimal > 0) {
         resto = Math.floor(sumDecimal % 2)
         binary.push(resto)
         sumDecimal = Math.floor(sumDecimal/2)
     }
     return binary.reverse().join("")
 };


 console.log(addBinary("0","0"))
