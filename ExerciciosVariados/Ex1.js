// Escreva uma função chamada fizzBuzz que recebe um número inteiro n e imprime os números de 1 a n. Para múltiplos de três, imprima "Fizz" ao invés do número, e para os múltiplos de cinco, imprima "Buzz". Para números que são múltiplos de três e cinco, imprima "FizzBuzz".

function fizzBuzz(n) {
    for (let i = 1 ; i <= n ; i++) { 
        if ( i % 3 === 0 && i % 5 === 0) {
            console.log("FizzBuzz")
        } else if (i % 3 === 0) {
            console.log("Fizz")
        } else if (i % 5 === 0) {
            console.log("Buzz") 
        } else {
            console.log(i)
        }
    }
}

fizzBuzz(15)