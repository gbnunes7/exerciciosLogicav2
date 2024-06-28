// Verifique se um número é perfeito. Um número perfeito é um número inteiro positivo que é igual à soma de seus divisores positivos próprios, excluindo ele mesmo.

function isPerfectNumber(num) {
    let divisores = []
    for(let i = 0 ; i < num ; i++) {
        if(num % i == 0) {
            divisores.push(i)
        }
    }
    const soma = divisores.reduce((accumulator,currentValue) => accumulator + currentValue,0)
    return soma == num 
}

console.log(isPerfectNumber(81))